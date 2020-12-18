import { Component, OnInit, Input } from '@angular/core';
import { Server } from './../../models/server';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  @Input() server: Server = new Server('NOC', '12', 1, '212', 22, [], 3333);;

  constructor() {
  }

  ngOnInit(): void {
  }

}