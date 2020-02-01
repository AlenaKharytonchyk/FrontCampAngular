import { Injectable } from '@angular/core';
import Source from '../models/source';
import Article from '../models/article';
import {NewsService} from './news.service';
import {fromEvent, Observable} from 'rxjs';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class DataStoreService {
  private articleList: Article[] = [];
  private selectedSource: Source = {id: null, name: 'Select the Channel'};
  sources: Source[];
  filter: string;
  displayMyArticles: boolean;
  displayMyArticles$: Observable<any>;
  constructor(private newsService: NewsService) {
  }

  get source() {
    return this.selectedSource;
  }

  set source(value: Source) {
    if (this.selectedSource.id !== value.id) {
      this.articleList = [];
    }

    this.selectedSource = value;
  }

  get articles() {
    return this.filter
      ? this.articleList.filter(article => article.title.toLowerCase().indexOf(this.filter.toLowerCase()) > -1).slice()
      : this.articleList.slice();
  }

  set articles(value: Article[]) {
    this.articleList = this.articleList.concat(value);
  }

  getArticle(id: string) {
    return this.articleList.find(article => article.url.indexOf(id) > -1);
  }
}
