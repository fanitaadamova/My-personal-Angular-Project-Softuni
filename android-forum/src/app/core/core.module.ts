import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AuthenticateComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  //Note: which components to be exported from this module
  exports: [HeaderComponent, FooterComponent, AuthenticateComponent]

})
export class CoreModule { }
