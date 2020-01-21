import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'frontCampTask';
  public main = 'main';
  public border = 'border';
  public basis = 'basis';

  label = 'Load More';

  functioncall(event) {
    console.log('functioncall', event);
  }
}


