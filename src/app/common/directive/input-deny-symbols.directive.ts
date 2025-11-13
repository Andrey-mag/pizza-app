import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appInputDenySymbols]',
  standalone: false,
})
export class InputDenySymbolsDirective {
  constructor(private control: NgControl) {}

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const cleaned = input.value.replace(/\./g, '');
    if (cleaned !== input.value) {
      input.value = cleaned;
      this.control?.control?.setValue(cleaned, { emitEvent: false });
    }
  }
}
