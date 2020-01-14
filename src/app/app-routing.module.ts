import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainInformationComponent} from './main-information/main-information.component';
import {ContactComponent} from './contact/contact.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {MainViewComponent} from './mainView/main-view.component';


const routes: Routes = [
  {path: '', component: MainInformationComponent},
  {path: 'main', component: MainInformationComponent},
  {path: 'contacts', component: ContactComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MainInformationComponent, ContactComponent, PageNotFoundComponent];
