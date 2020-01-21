import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainViewComponent } from './mainView/main-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SourceNameComponent } from './source-name/source-name.component';
import { SelectorComponent } from './selector/selector.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
