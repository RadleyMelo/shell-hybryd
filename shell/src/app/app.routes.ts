import { Routes, PreloadAllModules } from '@angular/router';
import { MfAndWcPageComponent } from './pages/mf-and-wc-page.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path: 'mf-products',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Routes',
      }).then((m: any) => m.REMOTE_ROUTES),
  },
  { path: 'compare', component: MfAndWcPageComponent },
  { path: '', pathMatch: 'full', redirectTo: 'compare' },
];
