import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <nav>
      <a routerLink="/compare">Compare (MF + WC)</a>
      <a routerLink="/mf-products">MF Products (lazy)</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
