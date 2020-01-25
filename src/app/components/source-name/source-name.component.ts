import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../services/news.service';

@Component({
  selector: 'app-source-name',
  templateUrl: './source-name.component.html',
  styleUrls: ['./source-name.component.less']
})
export class SourceNameComponent implements OnInit {
  sources: any[] = [];
  selectedSource: string;
  className: 'source-name';
  constructor( private newsService: NewsService ) { }

  ngOnInit() {
    this.selectedSource = 'Select the Channel';
  }

  get selected() {
    return this.newsService.source && this.newsService.source.name || this.selectedSource;
  }
}
