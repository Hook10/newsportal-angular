import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {News} from "./news";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private baseUrl = "http://localhost:8080/api/v1/news";
  constructor(private httpClient: HttpClient) { }

  getNewsList(): Observable<News[]>{
    return this.httpClient.get<News[]>(this.baseUrl);
  }

  createNews(news: News ): Observable<Object>{
    return this.httpClient.post(this.baseUrl, news);
  }

  getNewsById(id: number): Observable<News>{
   return this.httpClient.get<News>(this.baseUrl +'/'+ id);
  }

  updateNews(id: number, news: News): Observable<Object>{
    return this.httpClient.put(this.baseUrl + '/' + id, news);
  }

  deleteNews(id: number): Observable<Object>{
    return this.httpClient.delete(this.baseUrl + '/' + id);
  }

}
