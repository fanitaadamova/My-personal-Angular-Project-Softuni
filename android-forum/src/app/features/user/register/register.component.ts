import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { UserService } from '../user.serves';
import { ALLOWED_DOMAINS_FOR_EMAIL } from '../constants';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
 
})

export class RegisterComponent implements OnInit, OnDestroy {
 
  appEmailDomains = ALLOWED_DOMAINS_FOR_EMAIL;
  subscription!: Subscription;
  isLoading: boolean = false;

  constructor(
    private titlePage: Title,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.titlePage.setTitle('Register page');
  }

  register(form: NgForm): void {
    console.log(form);
    
    if (form.invalid) {
      console.log(form);
      
      return;
    }
    console.log("Register");
    console.log(form.value);
    
    this.isLoading = true;

    this.userService.register();
    form.reset();
    this.router.navigate(["/"]);

  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
