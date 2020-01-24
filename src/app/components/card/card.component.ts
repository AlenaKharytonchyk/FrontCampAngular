import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../services/news.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {
  articles: any[] = [];
  constructor( private newsService: NewsService ) { }

  ngOnInit() {
  }
  onSave() {
    this.newsService.storeArticles(this.articles).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  onGet() {
    this.newsService.getNewsRecources().subscribe(
      (articles: any) => {
        this.articles = this.articles.concat(articles);
      },
      (error) => alert('No information. Select other channel')
    );
  }
}
