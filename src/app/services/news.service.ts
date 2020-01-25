import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import Source from '../models/source';
import article from '../models/article';
import Article from '../models/article';

export interface Sources {
  sources: Source[];
}

export interface Articles {
  totalResults: number;
  articles: Article[];
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private totalResults: number;
  filter: string;

  constructor(
    private http: HttpClient
  ) { }

  get searchResults() {
    return this.totalResults;
  }

  getSourceName() {
    return this.http.get<Sources>('https://newsapi.org/v2/sources?apiKey=1d8434c04862439692cc773aa6bfc026')
      .pipe(
        map((response: Sources) => {
          console.log('response', response);
          return response.sources;
        })
      );
  }
  getNewsResources(source: Source, page: number) {
    return this.http.get<Articles>(
      `https://newsapi.org/v2/everything?sources=${source.id}&page=${page}&apiKey=1d8434c04862439692cc773aa6bfc026`)
      .pipe(
        map((response: Articles) => {
          console.log('response', response);
          const {totalResults, articles} = response;
          this.totalResults = totalResults;
          return articles;
        })
      );
  }

  storeArticles(articles: article[]) {
    console.log(articles);
    return this.http.put('https://angular-test-91dc6.firebaseio.com/data.json', articles);
  }
}
