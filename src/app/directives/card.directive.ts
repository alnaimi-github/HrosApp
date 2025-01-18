import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appCard]'
})
export class cardDirective  implements OnChanges {

@Input() externalColor :string ='black';
@Input('appCard') defaultColor :string ='pink';
  
  constructor(private ele:ElementRef) 
  { 
  
  }
  ngOnChanges() {
    this.ele.nativeElement.style.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseover') over(){
    this.ele.nativeElement.style.backgroundColor = this.externalColor;
  }
 
  @HostListener('mouseout')  out(){
    this.ele.nativeElement.style.backgroundColor = this.defaultColor;
  }

}
