import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { ThemeAddComponent } from './theme-add/theme-add.component';
import { ThemesAllComponent } from './themes-all/themes-all.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { ThemesLimitComponent } from './themes-limit/themes-limit.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ThemeDetailsComponent,
    ThemeAddComponent,
    ThemesAllComponent,
    ThemesLimitComponent
  ],
  imports: [
    ThemeRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports:[
    ThemesAllComponent,
    ThemesLimitComponent
  ]
})
export class ThemeModule { }
