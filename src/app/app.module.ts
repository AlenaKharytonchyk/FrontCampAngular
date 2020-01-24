import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainViewComponent } from './components/mainView/main-view.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SourceNameComponent } from './components/source-name/source-name.component';
import { SelectorComponent } from './components/selector/selector.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { CheckBoxComponent } from './components/check-box/check-box.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { NewsComponent } from './components/news/news.component';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { CardTemplateComponent } from './components/card-template/card-template.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
