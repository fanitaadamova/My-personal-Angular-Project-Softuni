import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserService } from '../user.serves';
import { User } from 'src/app/types/user';
import { Theme } from 'src/app/types/theme';
import { ApiService } from 'src/app/api.service';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/types/post';
import { UserId } from 'src/app/types/user-id';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  user: User | undefined;
  userId!: string | UserId;
  themesList: Theme[] = [];
  ownThemeList: Theme[] = [];
  postList: Post[] = [];
  ownPostList: Post[] = [];
  errMessage!: string;
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
        this.errMessage = err.error.message
       
      },
    });

    this.subscribe$ = this.apiService.getPosts().subscribe({
      next: (posts) => {
        this.ownPostList = posts.filter((post) => post.userId._id == this.userId);
        
      },
      error: (err) => this.errMessage = err.error.message
    })

  }

  ngOnDestroy(): void {
    if (this.subscribe$ ) {
      this.subscribe$ .unsubscribe();
    }
  }

}
