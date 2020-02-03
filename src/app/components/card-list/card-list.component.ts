import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../services/news.service';
import Article from '../../models/article';
import Source from '../../models/source';
import {DataStoreService} from '../../services/data-store.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.less']
})
export class CardListComponent implements OnInit {
  private page: number;
  private lastSourceId: string;
  constructor(private newsService: NewsService, private dataStore: DataStoreService) { }

  ngOnInit() {
    this.page = 1;

  }

  get filter() {
    return this.dataStore.filter;
  }

  get enabled() {
    return this.dataStore.displayMyArticles;
  }

  get articles() {
    return this.dataStore.articles;
  }

  get nextPage() {
    return this.lastSourceId === this.dataStore.source.id
      ? this.page += 1
      : this.page = 1;
  }

  get canLoad() {
    return this.dataStore.source.id && this.articles.length === 0 || this.newsService.searchResults > this.articles.length;
  }

  onLoadNews() {
    this.newsService.getNewsResources(this.dataStore.source, this.nextPage).subscribe(
      (articles: Article[]) => {
        this.dataStore.articles = articles;
        this.lastSourceId = this.dataStore.source.id;
        this.dataStore.displayMyArticles$.subscribe(console.log);
      }
    );
  }
}
