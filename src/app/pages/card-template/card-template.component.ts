import { Component, OnInit } from '@angular/core';
import Article from '../../models/article';
import {DataStoreService} from '../../services/data-store.service';

@Component({
  selector: 'app-card-template',
  templateUrl: './card-template.component.html',
  styleUrls: ['./card-template.component.less']
})
export class CardTemplateComponent implements OnInit {
  article: Article;
  constructor(private dataStore: DataStoreService) { }

  ngOnInit() {
    this.article = {
      url: null,
      urlToImage: null,
      source: null,
      title: null,
      author: null,
      publishedAt: null,
      content: null,
      createdByMe: null,
      description: null
    };
  }

  onSubmit() {
    this.dataStore.articles = [this.article];
  }
}
