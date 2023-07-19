import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-theme-details',
  templateUrl: './theme-details.component.html',
  styleUrls: ['./theme-details.component.scss']
})
export class ThemeDetailsComponent implements OnInit {
  constructor(private titlePage: Title) { }

  ngOnInit(): void {
    this.titlePage.setTitle('Theme details page');
  }
  
}
