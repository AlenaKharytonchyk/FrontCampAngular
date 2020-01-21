import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.less']
})
export class MainViewComponent implements OnInit {
  label = 'Add article';

  functioncall($event) {
    console.log('functioncall', $event);
  }
  constructor() { }

  ngOnInit() {
  }

}
