import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './features/user/user.module';
import { ThemeModule } from './features/themes/theme.module';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { cookieInterceptorProvider } from './core/cookie.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,  
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
    UserModule,
    ThemeModule,
    AppRoutingModule
  ],
  providers: [cookieInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
