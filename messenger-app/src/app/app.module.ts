import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';
import { LeftpanelComponent } from './leftpanel/leftpanel.component';
import { HeaderComponent } from './leftpanel/header/header.component';
import { NameSearchComponent } from './leftpanel/name-search/name-search.component';
import { ContactListComponent } from './leftpanel/contact-list/contact-list.component';
import { ContactItemComponent } from './leftpanel/contact-list/contact-item/contact-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    LoginComponent,
    LeftpanelComponent,
    HeaderComponent,
    NameSearchComponent,
    ContactListComponent,
    ContactItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
