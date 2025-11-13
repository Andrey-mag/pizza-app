import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isBurgerMenuActive = signal<boolean>(false);
  MENU_LIST = signal<string[]>([
    'Пиццы',
    'Напитки',
    'Доставка и оплата',
    'Контакты',
  ]);

  toggleBurger() {
    this.isBurgerMenuActive.set(!this.isBurgerMenuActive());
  }
}
