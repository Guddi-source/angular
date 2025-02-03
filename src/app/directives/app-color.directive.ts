import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAppColor]',
  standalone: true
})
export class AppColorDirective {

  constructor(private eleRef: ElementRef) {
    this.eleRef.nativeElement.style.background = 'red';
  }

}
