import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-themes-search',
  templateUrl: './themes-search.component.html',
  styleUrls: ['./themes-search.component.scss']
})
export class ThemesSearchComponent {

  themesList: Theme[] = [];
  searchThemesList: Theme[] = [];
  isLoading: boolean = true;
  subscription!: Subscription;
  errMessage!: string;

  constructor(
    private titlePage: Title,
    private apiService: ApiService
  ) { }


  ngOnInit(): void {
    this.titlePage.setTitle('Search page');

    this.subscription = this.apiService.getThemes().subscribe({
      next: (themes) => {
        this.themesList = themes;
        this.searchThemesList = themes
        this.isLoading = false;
      },
      error: (err) => {
        this.errMessage = err.error.message;
        this.isLoading = false;
      },
    });
  }

  searchThemes(form: NgForm): void {
    const { search } = form.value;
    this.searchThemesList = this.themesList
      .filter(theme => theme.themeName
        .toLowerCase()
        .includes(search.toLowerCase()))
  }


  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


}
