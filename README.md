
# Angular 16 – Microfrontends Híbridos (Standalone) – Module Federation + Web Components

Este boilerplate entrega:

- `shell` (host, **standalone**) – renderiza remote via **Module Federation** e um **Web Component** lado a lado.
- `remote-hybrid` (remote único) – gera **dois artefatos** a partir do mesmo código:
  - **MF**: `remoteEntry.js` expondo rotas e componente.
  - **WC**: bundle único `remote-hybrid.wc.js` com um custom element `<remote-products-list>`.

> **Requisitos**: Node 18+, `@angular/cli@16` (recomendado usar `npx -y @angular/cli@16 ng ...`), Webpack 5.

## Como rodar (dev)

1. Instale dependências:
   ```bash
   npm install
   npm install -w shell
   npm install -w remote-hybrid
   ```

2. Em três terminais:
   ```bash
   # terminal A - remote MF (porta 4201)
   npm run -w remote-hybrid serve:mf

   # terminal B - remote WC (porta 4202)
   npm run -w remote-hybrid serve:wc

   # terminal C - shell (porta 4200)
   npm run -w shell start
   ```

3. Abra `http://localhost:4200/compare` para ver **MF + WC** na mesma tela.

## Produção

- `remote-hybrid`:
  - `npm run -w remote-hybrid build:mf` → gera `remoteEntry.js` (MF).
  - `npm run -w remote-hybrid build:wc` → gera `dist/remote-hybrid/remote-hybrid.wc.js` (WC bundle único).
- `shell`:
  - `npm run -w shell build`

Ajuste versões de Angular no `package.json` se necessário (todas em **16.x**).
