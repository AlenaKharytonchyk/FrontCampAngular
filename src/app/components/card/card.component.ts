import {Component, Input, OnInit} from '@angular/core';
import {NewsService} from '../../services/news.service';
import Article from '../../models/article';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {
  @Input() article: Article;
  newsId: string;
  constructor( private newsService: NewsService ) { }

  ngOnInit() {
    this.newsId = this.article.url.replace(/\/$/, '').split('/').slice(-1)[0];
  }
}
