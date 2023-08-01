import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { ThemeAddComponent } from './theme-add/theme-add.component';
import { ThemesAllComponent } from './themes-all/themes-all.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { ThemesLimitComponent } from './themes-limit/themes-limit.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { PostEditComponent } from './post-edit/post-edit.component';
import { ThemesSearchComponent } from './themes-search/themes-search.component';




@NgModule({
  declarations: [
    ThemeDetailsComponent,
    ThemeAddComponent,
    ThemesAllComponent,
    ThemesLimitComponent,
    PostEditComponent,
    ThemesSearchComponent
  ],
  imports: [
    ThemeRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports:[
    ThemesAllComponent,
    ThemesLimitComponent,
    ThemesSearchComponent
  ]
})
export class ThemeModule { }
