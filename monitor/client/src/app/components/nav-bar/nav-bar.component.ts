import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input() title: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  go2ServersPage() {
    this.router.navigateByUrl('/');
  }

}
