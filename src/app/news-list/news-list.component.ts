import { Component, OnInit } from '@angular/core';
import {News} from "../news";
import {NewsService} from "../news.service";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  newsList: News[];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getAllNews();
  }

  private getAllNews(){
    this.newsService.getNewsList().subscribe(data =>{
      this.newsList = data;
    });
  }

}
