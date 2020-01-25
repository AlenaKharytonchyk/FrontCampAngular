import { Component, OnInit } from '@angular/core';
import {NewsListService} from '../../news.service';
import Article from '../../models/article';

@Component({
  selector: 'app-card-template',
  templateUrl: './card-template.component.html',
  styleUrls: ['./card-template.component.less']
})
export class CardTemplateComponent implements OnInit {
  article: Article;
  constructor(private accountsService: NewsListService) { }
  ngOnInit() {

  }

  onCreateAccount(
    accountName: string,
    accountData: string,
    accountContent: string,
    accountImg: string,
    accountAuthor: string,
    accountUrl: string) {
    this.accountsService.addNews(accountName, accountData, accountContent, accountImg, accountAuthor, accountUrl);
  }
}
