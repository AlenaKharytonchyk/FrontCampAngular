import { Component, OnInit } from '@angular/core';
import {NewsListService} from '../../news.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.less']
})
export class AddNewsComponent implements OnInit {

  constructor(private newsListService: NewsListService) { }

  ngOnInit() {
  }

  onCreateAccount(
    accountName: string,
    accountData: string,
    accountContent: string,
    accountImg: string,
    accountAuthor: string,
    accountUrl: string
  ) {
    this.newsListService.addNews(accountName, accountData, accountContent, accountImg, accountAuthor, accountUrl);
  }
}
