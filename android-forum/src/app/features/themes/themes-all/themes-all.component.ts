import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/api.service';

import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-themes-all',
  templateUrl: './themes-all.component.html',
  styleUrls: ['./themes-all.component.scss']
})


export class ThemesAllComponent implements OnInit {
  themesList: Theme[] = [];
  isLoading: boolean = true;

  constructor(
    private titlePage: Title,
    private apiService: ApiService
  ) { }


  ngOnInit(): void {
    this.titlePage.setTitle('Themes page');
    
    this.apiService.getThemes().subscribe({
      next: (themes) => {
        this.themesList = themes;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.log(`Error: ${err}`);
      },
    });
  }


}