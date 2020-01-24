import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.less']
})
export class TextAreaComponent implements OnInit {
  fruitArray: string[] = ['banana', 'pear', 'apple', 'peach', 'apricot', 'plum', 'bobobo'];
  char = 'a';
  sum: number = 73/3;
  constructor() { }

  ngOnInit() {
  }

  changeFilter(char: string) {
    this.char = char;
  }
}
