import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Server } from './../models/server';


@Injectable({
  providedIn: 'root'
})
export class ServersService {
  constructor(private http: HttpClient) { }

  getServers(): Observable<Server[]> {
    return this.http.get<Server[]>('http://localhost:2600/agents');
  }

  getServer(agent_id: string): Observable<Server> {
    return this.http.get<Server>('http://localhost:2600/agent/' + agent_id);
  }

  updateServer(agent_id: string, server: Server) {
    let url = 'http://localhost:2600/agent/update/' + agent_id;
    return this.http.post<Server>(url, server).pipe(catchError(this.handleError)).toPromise();
  }

  addServer(server: Server) {
    let url = 'http://localhost:2600/agent/add';
    return this.http.post<Server>(url, server).pipe(catchError(this.handleError)).toPromise();
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
