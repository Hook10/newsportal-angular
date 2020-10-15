import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {NewsListComponent} from "./news-list/news-list.component";
import {CreateNewsComponent} from "./create-news/create-news.component";
import {UpdateNewsComponent} from "./update-news/update-news.component";

const routes: Routes = [
  {path: 'news', component: NewsListComponent},
  {path: 'create-news', component: CreateNewsComponent},
  {path: '', redirectTo: 'news', pathMatch: 'full'},
  {path: 'update-news/:id', component: UpdateNewsComponent}
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
