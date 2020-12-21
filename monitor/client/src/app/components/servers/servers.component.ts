import { Server } from './../../models/server';
import { ServersService } from './../../services/servers.service';

import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<Server> = new MatTableDataSource<Server>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private serversService: ServersService) {
    //this.paginator = this.paginator;
  }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.serversService.getServers().subscribe(servers => {
      this.displayedColumns = ['agent_id', 'ip', 'cpu_count', 'platform','delete','edit', 'watch']
      this.dataSource = new MatTableDataSource<Server>(servers);
      this.dataSource.paginator = this.paginator;
    });
    
  }
}


// this.serversService.getServers().subscribe(servers => {
//   this.dataSource = new MatTableDataSource<Server>(servers);
//   this.dataSource.paginator = this.paginator;
// }); 