import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {
  PRODUCTS_ITEMS = signal([
    {
      img: 'assets/images/card-1.png',
      title: 'Мясная Делюкс',
      text: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
    },
    {
      img: 'assets/images/card-2.png',
      title: 'Морская Премиум',
      text: 'Перец, сыр, креветки, кальмары, мидии, лосось',
    },
    {
      img: 'assets/images/card-3.png',
      title: 'Бекон и Сосиски',
      text: 'Бекон, сыр, сосиски, ананас, томатная паста',
    },
    {
      img: 'assets/images/card-4.png',
      title: 'Куриная Делюкс',
      text: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
    },
    {
      img: 'assets/images/card-5.png',
      title: 'Барбекю Премиум',
      text: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
    },
    {
      img: 'assets/images/card-6.png',
      title: 'Барбекю Премиум',
      text: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
    },
    {
      img: 'assets/images/card-7.png',
      title: 'Барбекю Премиум',
      text: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
    },
    {
      img: 'assets/images/card-8.png',
      title: 'Сырная',
      text: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
    },
  ]);

  pizzaInfo = signal<{ title: string; img: string }>({ title: '', img: '' });
  showBigPizza = signal(false);

  showInfo(item: { title: string; img: string }) {
    this.pizzaInfo.set(item);
    this.showBigPizza.set(true);
  }

  closePopup() {
    this.showBigPizza.set(false);
  }
}
