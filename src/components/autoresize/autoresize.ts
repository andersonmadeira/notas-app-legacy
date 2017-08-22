import { Directive, HostListener,  ElementRef, Input } from '@angular/core';

@Directive({
  selector: 'ion-textarea[autoresize]' // Attribute selector
})
export class AutoresizeDirective {
  @HostListener('input', ['$event.target'])

  onInput(textArea: HTMLTextAreaElement): void {
    this.adjust();
  }

  @Input('autoresize') maxHeight: number;

  constructor(public element: ElementRef) {

  }

  ngOnInit(): void {
    console.log('OnNgInit() called');
    this.adjust();
  }

  adjust(): void {
    let ta = this.element.nativeElement.querySelector('textarea');
    if (ta) {
      ta.style.overflow = 'hidden';
      ta.style.height = 'auto';
      ta.style.height = ta.scrollHeight + 'px';
    } else {
      console.log('not in');
    }
  }
}
