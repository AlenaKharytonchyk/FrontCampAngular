import { Pipe, PipeTransform } from '@angular/core';
import Article from '../models/article';

@Pipe({
  name: 'myNewsFilter'
})
export class MyNewsFilterPipe implements PipeTransform {

  transform(allArticles: Article[], enabled: boolean): any {
    return enabled ? allArticles.filter(_ => _.createdByMe) : allArticles;
  }
}
