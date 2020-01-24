import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

// tslint:disable-next-line:component-class-suffix
// class Source {
//   name: string;
//   url: string;
// }

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.less']
})

export class SelectorComponent implements OnInit {
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
