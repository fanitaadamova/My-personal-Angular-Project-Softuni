import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { UserService } from '../user.serves';
import { ALLOWED_DOMAINS_FOR_EMAIL } from '../constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {
  appEmailDomains = ALLOWED_DOMAINS_FOR_EMAIL;
  subscription!: Subscription;
  errMessage!: string;
  

  constructor(
    private titlePage: Title,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.titlePage.setTitle('Login page');
  }

  login(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const { email, password } = form.value;

    this.subscription = this.userService.login(email, password).subscribe({
      next: () => {
        this.router.navigate(["/"]);
      },
      error: (err) => this.errMessage = err.error.message
    });
  }


  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


}


