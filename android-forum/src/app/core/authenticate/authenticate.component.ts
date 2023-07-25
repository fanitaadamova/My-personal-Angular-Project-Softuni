import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/features/user/user.serves';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit {
  isAuth = false;
  errMessage!: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getProfile().subscribe({
      next: () => { this.isAuth = true },
      error: () =>  { this.isAuth = true },
      complete: () => { this.isAuth = true }
    })
  }
}
