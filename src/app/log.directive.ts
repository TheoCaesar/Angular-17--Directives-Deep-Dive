import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appLog]',
  standalone: true,
  host: {
    "(click)":"onLog()"
  }
})
export class LogDirective {

  private hostElem = inject(ElementRef)
  onLog() {
    console.log('clicked...', this.hostElem.nativeElement)
  }

}
