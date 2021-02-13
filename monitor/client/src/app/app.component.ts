import { Component } from '@angular/core';
declare var google: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'YouKnow';

  ngOnInit(): void {
    google.charts.load('current', { packages: ['corechart', 'bar'] });
  }

  ngAfterViewInit(): void {

  }
}
