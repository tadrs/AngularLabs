import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDisableAfterClick]',
  standalone: true
})
export class DisableAfterClickDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick() {
    const button = this.el.nativeElement;
    const originalText = button.innerText;

    this.renderer.setProperty(button, 'disabled', true);
    this.renderer.setProperty(button, 'innerText', 'Processing...');

    setTimeout(() => {
      this.renderer.setProperty(button, 'disabled', false);
      this.renderer.setProperty(button, 'innerText', originalText);
    }, 3000);
  }
}