import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
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
  post: Post | undefined;
  subscription!: Subscription;
  errMessage!: string;

  constructor(
    private titlePage: Title,
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit(): void {
    this.titlePage.setTitle('Theme details page');
    this.getThemeWithDetails();
  }


  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  getThemeWithDetails(): void {
    const id = this.activatedRoute.snapshot.params['themeId'];
    this.apiService.getTheme(id).subscribe((theme) => {
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

    this.subscription = this.apiService.postComment(postText, themeId).subscribe({
      next: () => {
       form.reset()
       this.getThemeWithDetails();       
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
