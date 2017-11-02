import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { HighlightDirective } from './highlight.directive';
import { ContactComponent } from './contact/contact.component';
import { AwesomePipe } from './contact/awesome.pipe';
import {
  HighlightDirective as ContactHighlightDirective
} from './contact/highlight.directive';

import { FormsModule }        from '@angular/forms';

import { UserService }        from './user.service';
import { ContactService }     from './contact/contact.service';



@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    HighlightDirective,
    ContactHighlightDirective,
    ContactComponent,
    AwesomePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ContactService, UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
