import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouseEventsOnMap]',
  standalone: true,
})
export class MouseEventsOnMapDirective {
  scale = 1;
  panning = false;
  pointX = 0;
  pointY = 0;
  start = { x: 0, y: 0 };
  constructor() {}
  @HostBinding('style.transform')
  transform: string = `translate(${this.pointX}px, ${this.pointY}px) scale(${this.scale})`;

  setTransform() {
    this.transform = `translate(${this.pointX}px, ${this.pointY}px) scale(${this.scale})`;
  }

  @HostListener('mousedown', ['$event']) onMouseDown(event: any) {
    event.preventDefault();
    this.start = {
      x: event.clientX - this.pointX,
      y: event.clientY - this.pointY,
    };
    this.panning = true;
  }

  @HostListener('mouseup', ['$event']) onMouseUp(event: any) {
    this.panning = false;
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(event: any) {
    this.panning = false;
  }

  @HostListener('mousemove', ['$event']) onMouseMove(event: any) {
    event.preventDefault();
    if (!this.panning) {
      return;
    }
    this.pointX = event.clientX - this.start.x;
    this.pointY = event.clientY - this.start.y;
    this.setTransform();
  }

  @HostListener('wheel', ['$event']) onMouseWheel(event: any) {
    event.preventDefault();
    const xs = (event.clientX - this.pointX) / this.scale;
    const ys = (event.clientY - this.pointY) / this.scale;
    const delta = event.wheelDelta ? event.wheelDelta : -event.deltaY;
    delta > 0 ? (this.scale *= 1.05) : (this.scale /= 1.05);
    this.pointX = event.clientX - xs * this.scale;
    this.pointY = event.clientY - ys * this.scale;
    this.setTransform();
  }
}
