import { Component, OnInit } from '@angular/core';
import Article from '../../models/article';
import {ActivatedRoute} from '@angular/router';
import {DataStoreService} from '../../services/data-store.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.less']
})
export class CardDetailsComponent implements OnInit {
  article: Article;
  private id: number;
  constructor(private route: ActivatedRoute, private dataStore: DataStoreService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.article = this.dataStore.getArticle(params.newsId);
    });
  }

  get cardBodyClass() {
    return this.article && this.article.createdByMe ? 'col-md-9' : 'col-md-7';
  }
}
