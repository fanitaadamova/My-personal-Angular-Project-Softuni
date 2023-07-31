import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { Theme } from 'src/app/types/theme';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-theme-add',
  templateUrl: './theme-add.component.html',
  styleUrls: ['./theme-add.component.scss']
})

export class ThemeAddComponent implements OnInit, OnDestroy {
  theme: Theme | undefined;
  subscription!: Subscription;
  errMessage!: string;

  constructor(
    private titlePage: Title,
    private apiService: ApiService,
    private router: Router) { }

  ngOnInit(): void {
    this.titlePage.setTitle('Create theme page');
  }

  addNewTheme(form: NgForm): void {

    if (form.invalid) {
      return;
    }

    const { themeName, postText } = form.value;

    this.subscription = this.apiService.addNewTheme(themeName, postText).subscribe({
      next: () => {
        this.router.navigate(["/themes"]);
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
