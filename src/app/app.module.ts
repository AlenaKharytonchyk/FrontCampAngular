import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainViewComponent } from './components/mainView/main-view.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SourceNameComponent } from './components/source-name/source-name.component';
import { SelectorComponent } from './components/selector/selector.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { CheckBoxComponent } from './components/check-box/check-box.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { CardTemplateComponent } from './pages/card-template/card-template.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardListComponent } from './components/card-list/card-list.component';
import {NewsComponent} from './pages/news/news.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainViewComponent,
    routingComponents,
    PageNotFoundComponent,
    SourceNameComponent,
    SelectorComponent,
    TextAreaComponent,
    CheckBoxComponent,
    ButtonComponent,
    CardComponent,
    NewsComponent,
    AddNewsComponent,
    CardTemplateComponent,
    CardListComponent,
    CardDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
