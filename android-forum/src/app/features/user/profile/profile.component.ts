import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserService } from '../user.serves';
import { User } from 'src/app/types/user';
import { Theme } from 'src/app/types/theme';
import { ApiService } from 'src/app/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  user: User | undefined;
  userId!: string;
  themesList: Theme[] = [];
  ownThemeList: Theme[] = [];
  subscribe$!: Subscription;

  constructor(
    private titlePage: Title,
    private userService: UserService,
    private apiService: ApiService) { }

  ngOnInit(): void {
    this.titlePage.setTitle('My profile page');
    this.userId = this.userService.user?._id as string
    this.subscribe$ = this.userService.user$.subscribe({
      next: (user) => {
        this.user = user;
      },
      error: () => { },

    })

    this.subscribe$ = this.apiService.getThemes().subscribe({
      next: (themes) => {
        this.themesList = themes;
        this.ownThemeList = this.themesList.filter((theme) => theme.userId._id == this.userId)
        //this.isLoading = false;
      },
      error: (err) => {
        //this.isLoading = false;
        console.log(`Error: ${err}`);
      },
    });
  }

  ngOnDestroy(): void {
    if (this.subscribe$ ) {
      this.subscribe$ .unsubscribe();
    }
  }

}
