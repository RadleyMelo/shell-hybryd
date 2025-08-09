import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'mf-products-details',
  template: `
    <section class="card">
      <h2>Products Details (MF - lazy chunk)</h2>
      <p>Este componente é carregado sob demanda e sai em um chunk separado.</p>
    </section>
  `
})
export class ProductsDetailsComponent {}
