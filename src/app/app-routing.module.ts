import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainInformationComponent} from './components/main-information/main-information.component';
import {ContactComponent} from './components/contact/contact.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {NewsComponent} from './components/news/news.component';
import {CardTemplateComponent} from './components/card-template/card-template.component';


const routes: Routes = [
  {path: '', component: MainInformationComponent},
  {path: 'news/:newsId', component: NewsComponent},
  {path: 'pageTemplate', component: CardTemplateComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MainInformationComponent, ContactComponent, PageNotFoundComponent];
