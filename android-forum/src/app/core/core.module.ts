import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { SharedModule } from '../shared/shared.module';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AuthenticateComponent,
    ErrorComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  //Note: which components to be exported from this module
  exports: [HeaderComponent, FooterComponent, AuthenticateComponent, ErrorComponent]

})
export class CoreModule { }
