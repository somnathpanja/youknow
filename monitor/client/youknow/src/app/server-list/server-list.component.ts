import { Component, OnInit } from '@angular/core';
import { Server } from './../server';
import { SERVERS } from './../mock-servers';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})

export class ServerListComponent implements OnInit {
  servers: Server[] = SERVERS;

  constructor() { }

  ngOnInit(): void {
  }

}
