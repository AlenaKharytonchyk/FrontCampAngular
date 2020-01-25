import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { CardComponent } from '../card/card.component';
import Source from '../../models/source';


@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.less']
})

export class SelectorComponent implements OnInit {
  sources: Source[] = [];
  constructor( private newsService: NewsService ) { }

  ngOnInit() {
    this.newsService.getSourceName().subscribe(
      (sources: any) => {
        this.sources = sources;
      },
      (error) => console.log(error)
    );
  }
  get selectedSourceMod() {
    return this.newsService.source;
  }

  set selectedSourceMod(value: Source) {
    this.newsService.source = value;
    console.log(`Selected source: ${value.name}`);
  }
}
