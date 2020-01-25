import { Component, OnInit } from '@angular/core';
import {DataStoreService} from '../../services/data-store.service';

export interface Filter {
  text: string;
}

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.less']
})

export class TextAreaComponent implements OnInit {
  constructor(private dataStore: DataStoreService) { }
  filter: Filter

  ngOnInit() {
    this.filter = { text: this.dataStore.filter };
  }

  onSubmit() {
    console.log(this.filter);
    this.dataStore.filter = this.filter.text;
  }
}
