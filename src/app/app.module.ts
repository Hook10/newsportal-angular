import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewsListComponent } from './news-list/news-list.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import { CreateNewsComponent } from './create-news/create-news.component';
import {FormsModule} from "@angular/forms";
import { UpdateNewsComponent } from './update-news/update-news.component';



@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    CreateNewsComponent,
    UpdateNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
