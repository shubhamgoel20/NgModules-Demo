import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <app-title [title]= "title"></app-title>
   <app-contact></app-contact>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'v1';
}
