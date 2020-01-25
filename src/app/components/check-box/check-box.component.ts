import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../services/news.service';
import { NewsListService } from '../../news.service';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.less']
})
export class CheckBoxComponent implements OnInit {

  constructor(private newsListService: NewsListService) {
  }

  ngOnInit() {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.newsListService.addNews(accountName, accountStatus);
  }
}
