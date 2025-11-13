import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {
  ADVANTAGES_CARDS = signal([
    {
      icon: 'assets/icons/icon-1.svg',
      alt: 'icon-1',
      title: 'Лучшее тесто',
      text: 'Мы создаем тесто только из отборной итальянской муки наивысшего качества',
    },
    {
      icon: 'assets/icons/icon-2.svg',
      alt: 'icon-2',
      title: 'лучшие повара',
      text: 'Пиццы готовят самые профессиональные итальянские повара',
    },
    {
      icon: 'assets/icons/icon-3.svg',
      alt: 'icon-3',
      title: 'гарантия качества',
      text: 'Пиццы готовят самые профессиональные итальянские повара',
    },
    {
      icon: 'assets/icons/icon-4.svg',
      alt: 'icon-4',
      title: 'отборные рецепты',
      text: 'Мы используем рецепты от мировых лидеров изготовлении пиццы',
    },
  ]);
}
