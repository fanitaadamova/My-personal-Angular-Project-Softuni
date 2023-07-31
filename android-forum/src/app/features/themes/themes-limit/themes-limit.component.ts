import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/api.service';


import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-themes-limit',
  templateUrl: './themes-limit.component.html',
  styleUrls: ['./themes-limit.component.scss']
})


export class ThemesLimitComponent implements OnInit {
  themesLimitList: Theme[] = [];
  isLoading: boolean = true;
  errMessage!: string;
  subscription!: Subscription;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.subscription = this.apiService.getLastThemes(3).subscribe({
      next: (themes) => {
        this.themesLimitList = themes;
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