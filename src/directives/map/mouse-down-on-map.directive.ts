import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouseDownOnMap]',
  standalone: true,
})
export class MouseDownOnMapDirective {
  constructor() {}

  @HostListener('mousedown', ['$event']) onMouseDown(event: Event) {
    console.log(event);
  }
}
