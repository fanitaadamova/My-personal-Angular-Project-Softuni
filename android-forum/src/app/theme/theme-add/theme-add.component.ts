import { Component, OnInit , OnDestroy} from '@angular/core';
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
  isLoading: boolean = false;

  constructor(
    private titlePage: Title,
    private apiService: ApiService,
    private router: Router) { }

  ngOnInit(): void {
    this.titlePage.setTitle('Create theme page');
  }

  //My desicion
  // ngOnChanges(changes: SimpleChanges): void {   
  // }

  addNewTheme(form: NgForm): void {
    if (form.invalid) {
      console.log(form.value);
      return;     
    }

    console.log(form.value);
    this.isLoading = true;
    //да създам нов метод, с който ще правя POST заявка за добавяне на нова тема
    this.apiService.addNewTheme();
    form.reset();
    this.router.navigate(["/themes"]);
  }


  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
