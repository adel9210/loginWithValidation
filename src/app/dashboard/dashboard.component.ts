import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userData: { email: string, password: string };


  constructor(private authService: AuthService, private router: Router) {
    if (!this.authService.isUserAuthorized) {
      this.router.navigate(['/'])
    }
  }

  ngOnInit(): void {
    this.userData = this.authService.userData;
  }

  logout() {
    if (this.authService.logout()) {
      this.router.navigate(['/'])
    }
  }

}
