import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'mf-products-admin',
  template: `
    <section class="card">
      <h2>Products Admin (MF - lazy chunk)</h2>
      <p>Outro chunk separado (admin).</p>
    </section>
  `
})
export class ProductsAdminComponent {}
