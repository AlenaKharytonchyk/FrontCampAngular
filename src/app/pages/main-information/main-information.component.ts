import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-information',
  templateUrl: './main-information.component.html',
  styleUrls: ['./main-information.component.less']
})
export class MainInformationComponent implements OnInit {
  public main = 'main';

  constructor() { }

  ngOnInit() {
  }

}
