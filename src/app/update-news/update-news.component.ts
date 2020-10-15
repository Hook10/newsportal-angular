import { Component, OnInit } from '@angular/core';
import {News} from "../news";
import {NewsService} from "../news.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-news',
  templateUrl: './update-news.component.html',
  styleUrls: ['./update-news.component.css']
})
export class UpdateNewsComponent implements OnInit {

  id: number;
  news: News = new News;
  constructor(private newsService: NewsService,
              private route: ActivatedRoute,
              private router: Router) { }

  // constructor() { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.newsService.getNewsById(this.id  ).subscribe(data =>{
      this.news=data;
    }, error => console.log(error));
  }
  // saveNews(){
  //   this.newsService.createNews(this.news).subscribe( data =>{
  //       console.log(data);
  //       this.goToNewsList();
  //     },
  //     error => console.log(error));
  // }

  onSubmit(){
    this.newsService.updateNews(this.id, this.news).subscribe(data =>{
      this.goToNewsList();
    }
    , error => console.log(error));
  }
  goToNewsList(){
    this.router.navigate(['/news']);
  }

}
