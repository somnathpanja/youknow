import { Component, OnInit } from '@angular/core';
import { Server } from './../../models/server';
import { ServersService } from './../../services/servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers: Server[];
  constructor(private serversService: ServersService) {
    this.servers = [];
  }

  ngOnInit() {
    this.serversService.getServers().subscribe(servers => {
      this.servers = servers;
    });
    
    // this.servers = [
    //   new Server('NOC_1', '192.168.1.1', 2, 'linux64', 1000, ['node'], 111),
    //   new Server('NOC_2', '192.168.1.3', 2, 'linux64', 1000, ['node'], 111)
    // ];
  }
}