import { Component, OnInit } from '@angular/core';
import {News} from "../news";
import {NewsService} from "../news.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  newsList: News[];

  constructor(private newsService: NewsService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllNews();
  }

  private getAllNews(){
    this.newsService.getNewsList().subscribe(data =>{
      this.newsList = data;
    });
  }

  updateNews(id:number){
    this.router.navigate(['update-news', id]);
  }

  deleteNews(id: number) {
    this.newsService.deleteNews(id).subscribe(data => {
      console.log(data);
      this.getAllNews();
    })

  }
}
