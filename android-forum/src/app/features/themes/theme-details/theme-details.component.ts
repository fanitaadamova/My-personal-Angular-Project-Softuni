import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { UserService } from 'src/app/features/user/user.serves';
import { Post } from 'src/app/types/post';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-theme-details',
  templateUrl: './theme-details.component.html',
  styleUrls: ['./theme-details.component.scss']
})

export class ThemeDetailsComponent implements OnInit, OnDestroy {
  theme: Theme | undefined;
  canLike$!: Observable<number>;
  likes$!: Observable<number>;
  userId!: string;
  post: Post | undefined;
  subscribe$!: Subscription;
  isOwner!: boolean;
  errMessage!: string;

  constructor(
    private titlePage: Title,
    private apiService: ApiService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.titlePage.setTitle('Theme details page');
    this.getThemeWithDetails();
    this.userId = this.userService.user?._id as string
  }


  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  likePost(postId: string): void {
    this.subscribe$ = this.apiService.likePost(postId).subscribe({
      next: () => {
        this.getThemeWithDetails();
      },
      error: (err) => this.errMessage = err.error.message
    })
  }


  getThemeWithDetails(): void {
    const themeId = this.activatedRoute.snapshot.params['themeId'];
    this.subscribe$ = this.apiService.getTheme(themeId).subscribe((theme) => {
      this.theme = theme;
      console.log({ theme });
    })
  }

  postComment(form: NgForm): void {
    const themeId = this.activatedRoute.snapshot.params['themeId'];
    if (form.invalid) {
      return;
    }
    const { postText } = form.value;

    this.subscribe$ = this.apiService.postComment(postText, themeId).subscribe({
      next: () => {
        form.reset()
        this.getThemeWithDetails();
      },
      error: (err) => this.errMessage = err.error.message
    })

  }

  ngOnDestroy(): void {
    if (this.subscribe$) {
      this.subscribe$.unsubscribe();
    }
  }


}
