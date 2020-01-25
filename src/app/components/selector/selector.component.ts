import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import Source from '../../models/source';
import {DataStoreService} from '../../services/data-store.service';


@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.less']
})

export class SelectorComponent implements OnInit {
  constructor( private newsService: NewsService, private dataStore: DataStoreService) { }
  ngOnInit() {
    if (!this.dataStore.sources) {
      this.newsService.getSourceName().subscribe(
        (sources: Source[]) => {
          this.dataStore.sources = sources;
        },
        (error) => console.log(error)
      );
    }
  }

  get selectedSourceMod() {
    return this.dataStore.source;
  }

  set selectedSourceMod(value: Source) {
    this.dataStore.source = value;
    console.log(`Selected source: ${value.name}`);
  }

  get sources() {
    return this.dataStore.sources;
  }
}
