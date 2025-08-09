import { Component, AfterViewInit, ElementRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-mf-and-wc-page',
  standalone: true,
  template: `
    <h1>Comparação: Module Federation vs Web Component</h1>
    <div class="grid">
      <section class="card">
        <h2>MF – ProductsList</h2>
        <!-- Render via selector exposto pelo remote -->
        <div id="mfMount"></div>
        <mf-products-list></mf-products-list>
      </section>

      <section class="card">
        <h2>Web Component – Counter</h2>
        <div id="wcHost"></div>
      </section>
    </div>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MfAndWcPageComponent implements AfterViewInit {
  constructor(private host: ElementRef) {}

  async ngAfterViewInit() {
    // Carregar bundle do Web Component se ainda não estiver carregado
    await this.ensureWcLoaded('http://localhost:4202/remote-hybrid.wc.js');
    const wcHost: HTMLElement = this.host.nativeElement.querySelector('#wcHost');
    if (wcHost && !wcHost.querySelector('remote-products-list')) {
      const wcEl = document.createElement('remote-products-list');
      wcHost.appendChild(wcEl);
    }
  }

  private ensureWcLoaded(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[data-wc-src="${src}"]`)) return resolve();
      const s = document.createElement('script');
      s.src = src;
      s.type = 'module';
      s.async = true;
      s.setAttribute('data-wc-src', src);
      s.onload = () => resolve();
      s.onerror = (e) => reject(e as any);
      document.body.appendChild(s);
    });
  }
}
