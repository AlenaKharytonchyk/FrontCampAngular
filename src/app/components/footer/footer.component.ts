import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addFooterText() {
    const footer = document.querySelector('footer');
    if(footer.children.length === 1){
      footer.innerHTML = `${footer.innerHTML} <footer-text></footer-text>`;
    }
  }
}
