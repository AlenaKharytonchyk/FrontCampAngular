import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  source: any;
  constructor(
    private http: HttpClient
  ) { }

  getSourceName() {
    return this.http.get<any>('https://newsapi.org/v2/sources?apiKey=1d8434c04862439692cc773aa6bfc026')
      .pipe(
        map((response: any) => {
          console.log('response', response);
          return response.sources;
        })
      );
  }
  getNewsRecources() {
    return this.http.get<any>(`https://newsapi.org/v1/articles?source=${this.source.id}&apiKey=1d8434c04862439692cc773aa6bfc026`)
      .pipe(
        map((response: any) => {
          console.log('response', response);
          return response.articles;
        })
      );
  }

  storeArticles(articles: any[]) {
    console.log(articles);
    return this.http.put('https://angular-test-91dc6.firebaseio.com/data.json', articles);
  }
}
