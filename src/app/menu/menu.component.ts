import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  selectedCategory: string = 'All';

  categories = [
    {
      name: 'Coffees',
      items: [
        { name: 'Espresso', price: '5 dt', image: './assets/espresso.jpg' },
        { name: 'Latte', price: '8 dt', image: './assets/latee.webp' },
        { name: 'Cappuccino', price: '7 dt', image: './assets/capp.png' }
      ]
    },
    {
      name: 'Desserts',
      items: [
        { name: 'Tiramisu', price: '10 dt ', image: './assets/tiramisou.png' },
        { name: 'Cheesecake', price: '9.5 dt', image: './assets/chesscake.png' }
      ]
    },
    {
      name: 'Cold Drinks',
      items: [
        { name: 'Iced Coffee', price: '9 dt', image: './assets/ice.webp' },
        { name: 'Lemonade', price: '6 dt', image: './assets/lemonde.png' }
      ]
    }
  ];

  get filteredCategories() {
    if (this.selectedCategory === 'All') return this.categories;
    return this.categories.filter(c => c.name === this.selectedCategory);
  }
}