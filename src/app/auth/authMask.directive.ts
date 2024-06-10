import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[appMask]'
})
export class MaskDirective {
constructor(public ref: ElementRef) { }

  @HostListener('input')
  masking() {
    let str = this.ref.nativeElement.value;
    if (this.ref.nativeElement.value.length == 1) {
      return this.ref.nativeElement.value = '*'
    } else if (this.ref.nativeElement.value.length <= 15) {
      let str = this.ref.nativeElement.value;
      str = str.substring(0, this.ref.nativeElement.value.length - 1) + "*" + str.substring(this.ref.nativeElement.value.length - 1 + 1);
      return this.ref.nativeElement.value = str
    } else {
      return this.ref.nativeElement.value
    }
  }
}