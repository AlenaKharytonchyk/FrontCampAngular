import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainInformationComponent} from './pages/main-information/main-information.component';
import {ContactComponent} from './components/contact/contact.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {NewsComponent} from './pages/news/news.component';
import {CardTemplateComponent} from './pages/card-template/card-template.component';


const routes: Routes = [
  {path: '', component: MainInformationComponent},
  {path: 'news/new-article', component: CardTemplateComponent},
  {path: 'news/:newsId', component: NewsComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MainInformationComponent, ContactComponent, PageNotFoundComponent, NewsComponent, CardTemplateComponent];
