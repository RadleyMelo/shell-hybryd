import { Component } from '@angular/core';

/**
 * Componente raiz mínimo apenas para obter um Injector válido.
 * Não renderiza nada na tela.
 */
@Component({
  selector: 'wc-root',
  standalone: true,
  template: ``,
})
export class DummyRootComponent {}
