import { Component, OnInit } from '@angular/core';
import {DataStoreService} from '../../services/data-store.service';

@Component({
  selector: 'app-source-name',
  templateUrl: './source-name.component.html',
  styleUrls: ['./source-name.component.less']
})
export class SourceNameComponent implements OnInit {
  sources: any[] = [];
  selectedSource: string;
  constructor( private dataStore: DataStoreService) { }

  ngOnInit() {
    this.selectedSource = 'Select the Channel';
  }

  get selected() {
    return this.dataStore.source && this.dataStore.source.name || 'Something when wrong';
  }
}
