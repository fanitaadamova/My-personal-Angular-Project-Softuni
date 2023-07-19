import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/features/user/user.serves';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private userService: UserService, private router: Router) { }

  get isLoggedin(): boolean {
    return this.userService.isLogged;
  }
  /*
  get firstName(): string {
    return this.userService.user?.firstName || '';
  }
  */

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/']);
  }
}
