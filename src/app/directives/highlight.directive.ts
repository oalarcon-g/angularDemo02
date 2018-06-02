import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private _el: ElementRef) {
    console.log("directiva llamada");
    
  }
  
  @Input('appHighlight') newColor:string;

  @HostListener('mouseenter') mouseEnter() {
    this._el.nativeElement.style.backgroundColor= this.newColor || 'yellow';
  }

  @HostListener('mouseleave') mouseLeave() {
    this._el.nativeElement.style.backgroundColor= null;
  }

}
