import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../services/news.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {
  // newsChannelNames;
  articles: any[] = [];
  constructor( private newsService: NewsService ) { }

  ngOnInit() {
    // this.newsChannelNames = this.newsService.getNewsRecources();
    // this.newsService.getNewsRecources().subscribe(data => this.sources = data['sources']);
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
        this.articles = articles;
      },
      (error) => console.log(error)
    );
  }
}
