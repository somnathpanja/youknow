import { Server } from './../../models/server';
import { ServersService } from './../../services/servers.service';
import { ServerConfigComponent } from './../server-config/server-config.component';

import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ServerComponent } from '../server/server.component';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements AfterViewInit, OnInit {
  oldServer: Server;
  selectedServer: Server;
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<Server> = new MatTableDataSource<Server>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private serversService: ServersService,
    public configDialog: MatDialog,
    private router: Router) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.serversService.getServers().subscribe(servers => {
      this.displayedColumns = ['agent_id', 'ip', 'details', 'cpu_count', 'platform', 'delete', 'edit', 'watch']
      this.dataSource = new MatTableDataSource<Server>(servers);
      this.dataSource.paginator = this.paginator;
    });
  }

  openServerEditDialog(server: Server) {
    let self = this;
    this.oldServer = server;
    this.selectedServer = Server.clone(server);
    const dialogRef = this.configDialog.open(ServerConfigComponent, {
      data: this.selectedServer,
      // width: '50%',
      // minHeight: 'calc(100vh - 90px)',
      // height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.serversService.updateServer(this.oldServer.agent_id as string, this.selectedServer).then(data => {
          console.log(data);
          this.oldServer = this.selectedServer;
        }).catch(err => {
          console.log('error=', err);
        });
      }
    });
  }

  viewBtnClick(server: Server) {
    this.router.navigateByUrl('/server?agent_id=' + server.agent_id);
  }

  addNewServer() {
    this.selectedServer = Server.clone({});

    const dialogRef = this.configDialog.open(ServerConfigComponent, {
      data: this.selectedServer,
      // width: '50%',
      // minHeight: 'calc(100vh - 90px)',
      // height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.serversService.addServer(this.selectedServer).then(data => {
          console.log(data);   
        }).catch(err => {
          console.log('error=', err);
        });
      }
    });
  }
}