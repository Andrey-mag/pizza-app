import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class Form implements OnInit {
  orderForm!: FormGroup;
  showPopup = signal(false);
  showBigPizza = signal(false);

  get name() {
    return this.orderForm.get('name');
  }
  get address() {
    return this.orderForm.get('address');
  }

  get phone() {
    return this.orderForm.get('phone');
  }

  blockDots(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.value.includes('.')) {
      input.value = input.value.replace(/\./g, '');
      this.name?.setValue(input.value);
    }
  }

  onSubmit(): void {
    if (this.orderForm.invalid) {
      this.orderForm.markAllAsTouched();
      return;
    }

    console.log('Отправка формы:', this.orderForm.getRawValue());

    setTimeout(() => {
      this.showPopup.set(true);
      this.orderForm.reset();
    }, 1000);
  }

  closePopup(): void {
    this.showPopup.set(false);
  }

  private initOrderForm() {
    this.orderForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern(/^[^.\d]+$/),
        ],
      ],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\+?\d{10,15}$/)]],
    });
  }

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.initOrderForm();
  }
}
