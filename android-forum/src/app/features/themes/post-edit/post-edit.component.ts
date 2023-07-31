import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Post } from 'src/app/types/post';


@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit, OnDestroy {
  isLoading: boolean = true;
  subscribe$!: Subscription;
  errMessage!: string;
  postId!: string;
  themeId!: any;
  themeName!: string;
  post: Post | undefined;
  postText: string | undefined;
  postList: Post[] = [];



  constructor(
    private titlePage: Title,
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.titlePage.setTitle('Post edit page');
    this.postId = this.activatedRoute.snapshot.params['postId'];

    this.subscribe$ = this.apiService.getPosts().subscribe({
      next: (posts) => {
        this.post = posts.find((post) => post._id == this.postId);
        this.postText = this.post?.text;
        this.themeId = this.post?.themeId._id;
      },
      error: (err) => this.errMessage = err.error.message
    })
  }



  updatePost(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const { postText } = form.value;
    this.subscribe$ = this.apiService.updatePost(this.themeId, this.postId, postText).subscribe({
      next: () => {
        this.router.navigate([`/themes/${this.themeId}`]);
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
