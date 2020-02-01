import { Pipe, PipeTransform } from '@angular/core';
import Article from '../models/article';
import {DataStoreService} from '../services/data-store.service';

@Pipe({
  name: 'titleFilter'
})

export class TitleFilterPipe implements PipeTransform {
  transform(allArticles: Article[], value: string): any {
    if (!value) { return allArticles; }

    return allArticles.filter(article => article.title.toLowerCase().includes(value.toLowerCase()));
  }
}

