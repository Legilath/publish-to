import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
/*@HostListener('click') onClick() {
  console.log("Click !!);
}*/
export class BorderCardDirective {

  constructor(private element : ElementRef) {
    this.setBorder("gray");
  }
  @Input('appBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('blue');
  }

  setHeight(height: number) {
    this.element.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string) {
    this.element.nativeElement.style.border = `solid 4px ${color}`;
  }

}
