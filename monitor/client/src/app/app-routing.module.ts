import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServersComponent } from './components/servers/servers.component';
import { ServerComponent } from './components/server/server.component';

const routes: Routes = [
  {
    path: '',
    component: ServersComponent
  },
  {
    path: 'server',
    component: ServerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
