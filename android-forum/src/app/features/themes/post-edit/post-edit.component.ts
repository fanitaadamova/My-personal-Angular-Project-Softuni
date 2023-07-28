import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Post } from 'src/app/types/post';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit, OnDestroy {
  themesList: Theme[] = [];
  isLoading: boolean = true;
  subscribe$!: Subscription;
  errMessage!: string;
  themeId!: string;
  themeName!: string;
  postText!: string;
  postList: Post[] = [];
  theme: Theme | undefined;


  constructor(
    private titlePage: Title,
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {
  }

 


  ngOnDestroy(): void {
    if (this.subscribe$) {
      this.subscribe$.unsubscribe();
    }
  }

}
