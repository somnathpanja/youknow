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
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<Server> = new MatTableDataSource<Server>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private serversService: ServersService,
    public configDialog: MatDialog,
    private router: Router) {
    //this.paginator = this.paginator;
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.serversService.getServers().subscribe(servers => {
      this.displayedColumns = ['agent_id', 'ip', 'cpu_count', 'platform', 'delete', 'edit', 'watch']
      this.dataSource = new MatTableDataSource<Server>(servers);
      this.dataSource.paginator = this.paginator;
    });
  }

  openConfigDialog(server: Server) {
    const dialogRef = this.configDialog.open(ServerConfigComponent, {
      data: server,
      // width: '50%',
      // minHeight: 'calc(100vh - 90px)',
      // height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  viewBtnClick(server: Server) {
    this.router.navigateByUrl('/server?agent_id=' + server.agent_id);
  }
}

// this.serversService.getServers().subscribe(servers => {
//   this.dataSource = new MatTableDataSource<Server>(servers);
//   this.dataSource.paginator = this.paginator;
// }); 