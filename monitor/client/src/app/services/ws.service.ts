import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject, WebSocketSubjectConfig } from "rxjs/webSocket";
import { v4 as uuidV4 } from "uuid";

// https://stackoverflow.com/questions/60952255/connecting-a-websocket-in-angular

interface CallbackDictionary<T> {
  [Key: string]: T;
}

interface EventDictionary<T> {
  [Key: string]: T;
}

enum Event {
  Up = 1,
  Down,
  Left,
  Right,
}

@Injectable({
  providedIn: 'root'
})
export class WsService {
  ws: WebSocketSubject<string>;
  callbacks: CallbackDictionary<() => void> = {};
  events: EventDictionary<() => void> = {};

  constructor() {
    this.callbacks = {};
    this.events = {};
    this.ws = webSocket('wss://example.com');
    this.callbacks = {};
    this.events = {};

    this.ws.subscribe(
      this.onMessage,
      err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
      () => { console.log('complete'); } // Called when connection is closed (for whatever reason).
    );
  }

  /**
   * @description send message and receive a response over callback
   * @param data 
   * @param callback 
   */
  public send(cmd: string, data: string, callback: () => void) {
    let packet = { token: uuidV4(), cmd, data }
    this.ws.next(data);
    this.callbacks[packet.token] = callback;
  }

  /**
   * @description Attach permanent event
   * @param data 
   * @param callback 
   */
  public attachEvent(event: string, callback: () => void) {
    this.events[event] = callback;
    this.ws.next(JSON.stringify({ event, action: 'subscribe' }));
  }

  /**
   * @description Attach permanent event
   * @param data 
   * @param callback 
   */
  public detachEvent(event: string) {
    delete this.events[event];
    this.ws.next(JSON.stringify({ event, action: 'unsubscribe' }));
  }

  private onMessage(msg: string) {
    let packet = JSON.parse(msg);

    if (packet.token) {
      this.callbacks[packet.token].call(packet.data);
      delete this.callbacks[packet.token];
    } else if (this.events[packet.event]) { // If its not simple function call then it must be event if not detached
      this.events[packet.event].call(packet.data);
    }
  }
}
