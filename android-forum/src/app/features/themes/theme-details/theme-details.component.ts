import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { UserService } from 'src/app/features/user/user.serves';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-theme-details',
  templateUrl: './theme-details.component.html',
  styleUrls: ['./theme-details.component.scss']
})
export class ThemeDetailsComponent implements OnInit {
  theme: Theme | undefined;

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

}
