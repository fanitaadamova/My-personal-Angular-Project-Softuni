import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/api.service';

import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-themes-all',
  templateUrl: './themes-all.component.html',
  styleUrls: ['./themes-all.component.scss']
})


export class ThemesAllComponent implements OnInit, OnDestroy {
  themesList: Theme[] = [];
  isLoading: boolean = true;
  subscription!: Subscription;
  errMessage!: string;

  constructor(
    private titlePage: Title,
    private apiService: ApiService
  ) { }


  ngOnInit(): void {
    this.titlePage.setTitle('Themes page');

    this.subscription = this.apiService.getThemes().subscribe({
      next: (themes) => {
        this.themesList = themes;
        this.isLoading = false;
      },
      error: (err) => {
       this.errMessage = err.error.message;
       this.isLoading = false;
      },
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}