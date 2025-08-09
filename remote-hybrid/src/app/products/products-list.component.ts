import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'mf-products-list',
  standalone: true,
  imports: [NgFor],
  template: `
    <section class="card">
      <h2>Products (MF / WC)</h2>
      <ul>
        <li *ngFor="let p of products">{{ p }}</li>
      </ul>
    </section>
  `
})
export class ProductsListComponent {
  products = ['Laptop', 'Headphones', 'Keyboard'];
}
