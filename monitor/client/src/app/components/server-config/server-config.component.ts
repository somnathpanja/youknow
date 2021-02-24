import { Component, Inject, OnInit, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Server } from './../../models/server';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-server-config',
  templateUrl: './server-config.component.html',
  styleUrls: ['./server-config.component.css']
})
export class ServerConfigComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public server: Server) {
    this.server = server;
  }

  ngOnInit(): void {
  }

  setServerProperty(property: string, e: Event) {
    (this.server as any)[property] = (e.target as HTMLInputElement).value;
  }
}
