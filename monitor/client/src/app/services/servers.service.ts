import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Server } from './../models/server';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor(private http: HttpClient) { }

  getServers(): Observable<Server[]> {
    return this.http.get<Server[]>('http://localhost:2600/agents');
  }

  getServer(agent_id:string): Observable<Server> {
    return this.http.get<Server>('http://localhost:2600/agent/' + agent_id);
  }
}
