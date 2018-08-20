import { Directive, ElementRef,Input ,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) { }
  @HostListener("mouseenter") onMouseEnter(){
    this.textCo("black")
  }

  @HostListener("mouseout") onMouseOut(){
    this.textCo("blue")
  }

  private textCo(action:string){
    this.elem.nativeElement.style.color=action;
    

  }

}
