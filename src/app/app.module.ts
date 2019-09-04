import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgxGaugeModule } from 'ngx-gauge';
import { ApiService } from './Api/api.services';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { AppConstants } from './Classes/AppConstants';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGaugeModule,
    HttpClientModule
  ],
  providers: [ApiService,
    AppConstants,
    HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
