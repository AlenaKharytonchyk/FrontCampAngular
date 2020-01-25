import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../services/news.service';
import Article from '../../models/article';
import Source from '../../models/source';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.less']
})
export class CardListComponent implements OnInit {
  articles: Article[];
  private source: Source;
  private page: number;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.articles = [];
    this.source = {id: null, name: null};
    this.page = 1;
  }

  get canLoad() {
    return this.newsService.source.id && this.articles.length === 0 || this.newsService.searchResults > this.articles.length;
  }

  get articleList() {
    if (this.newsService.source.id !== this.source.id){
      return [];
    }

    if (this.newsService.filter) {
      const filter = this.newsService.filter.toLowerCase();
      return this.articles.filter(article => article.title.toLowerCase().indexOf(filter) > -1);
    }

    return this.articles;
  }

  onLoadNews() {
    if (this.source.id !== this.newsService.source.id) {
      this.articles = [];
      this.page = 1;
    } else {
      this.page += 1;
    }

    this.newsService.getNewsResources(this.page).subscribe(
      (articles: Article[]) => {
        this.articles = this.articles.concat(articles);
        this.source = this.newsService.source;
      }
    );
  }
}
