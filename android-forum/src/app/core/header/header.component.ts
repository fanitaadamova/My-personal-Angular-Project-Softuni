import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/features/user/user.serves';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy{
  subscription!: Subscription;
  errMessage!: string;
  constructor(private userService: UserService, private router: Router) { }

  get isLoggedin(): boolean {
    return this.userService.isLogged;
  }


  get username(): string {
    return this.userService.user?.username || '';
  }


  logout(): void {
    this.subscription = this.userService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (err) => this.errMessage = err.error.message

    })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
