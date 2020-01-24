import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { CardComponent } from '../card/card.component';


@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.less']
})

export class SelectorComponent implements OnInit {
  sources: any[] = [];
  selectedSource: string;
  constructor( private newsService: NewsService ) { }

  ngOnInit() {
    this.selectedSource = 'Select the Channel';
  }
  onShow() {
    this.newsService.getSourceName().subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  onGet() {
    this.newsService.getSourceName().subscribe(
      (sources: any) => {
        this.sources = sources;
      },
      (error) => console.log(error)
    );
  }

  onSelect(source: any) {
    this.newsService.source = source;
    this.selectedSource = source.name;
  }
}
