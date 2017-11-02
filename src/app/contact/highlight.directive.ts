import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[Highlight],input'
})
export class HighlightDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'powderblue';
    console.log(
      `* Contact highlight called for ${el.nativeElement.tagName}`);
  }

}
