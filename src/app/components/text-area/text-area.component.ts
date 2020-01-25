import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../services/news.service';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.less']
})
export class TextAreaComponent implements OnInit {
  private filter: string;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
  }

  changeFilter(filter: string) {
    this.filter = filter;
    this.newsService.filter = filter;
  }
}
