import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlight],button'
})
export class HighlightDirective {

  constructor(el : ElementRef) { 
    el.nativeElement.style.backgroundColor = 'GREEN';
    console.log(
      `* AppRoot highlight called for ${el.nativeElement.tagName}`);
  }
  }

