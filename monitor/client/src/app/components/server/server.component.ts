import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Server } from './../../models/server';
import { WsService } from './../../services/ws.service';
import { ServersService } from './../../services/servers.service';
import * as EventTypes from './../../../assets/common/eventTypes.json';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  @Input() server: Server = new Server('NOC', '', '12', 1, '212', 22, [], 3333);
  agent_id: string = '';
  constructor(private route: ActivatedRoute, private router: Router, private wsService: WsService, private serversService: ServersService,) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.agent_id = params['agent_id'];
    });
  }

  ngAfterViewInit() {
    this.serversService.getServer(this.agent_id).subscribe(server => {
      this.server = server;
    });

    this.wsService.attachEvent(EventTypes.OS_UPDATE, this.agent_id, function (data: any) {
      console.log(data);
    });
  }
}
