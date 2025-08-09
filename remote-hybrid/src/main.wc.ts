import 'document-register-element';
import { bootstrapApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { productsListStandaloneProviders } from './app/wc.providers';
import { ProductsListComponent } from './app/products/products-list.component';
import { DummyRootComponent } from './app/wc-root.component';
import './polyfills-wc';

bootstrapApplication(DummyRootComponent, {
  providers: [...productsListStandaloneProviders],
}).then(appRef => {
  const injector = appRef.injector;
  if (!customElements.get('remote-products-list')) {
    const el = createCustomElement(ProductsListComponent, { injector });
    customElements.define('remote-products-list', el);
  }
}).catch(err => console.error(err));
