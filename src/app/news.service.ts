import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsListService {

  constructor() { }

  accounts = [
    {
      name: '',
      data: '',
      content: '',
      img: '',
      author: '',
      url: ''
    },
    ];

  public updatedStatusValue: EventEmitter<string> = new EventEmitter();

  reportStatus(status: string) {
    this.updatedStatusValue.emit(status);
  }

  addNews(name: string, data: string, content: string, img: string, author: string, url: string) {
    this.accounts.push({name, data, content, img, author, url});
    console.log('A new account was created with status ' + this.accounts);
  }

  changeNews(id: number) {
    this.accounts[id].data = 'inactive';
  }

}
