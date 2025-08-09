import { Routes } from '@angular/router';

export const REMOTE_ROUTES: Routes = [
  // Default route: products list (eager chunk)
  { path: '', loadComponent: () => import(/* webpackChunkName: "mf-products-list" */ './products/products-list.component').then(m => m.ProductsListComponent) },

  // Extra lazy route to demonstrate split chunks:
  { path: 'details', loadComponent: () => import(/* webpackChunkName: "mf-details" */ './products/products-details.component').then(m => m.ProductsDetailsComponent) },

  // Another lazy route:
  { path: 'admin', loadComponent: () => import(/* webpackChunkName: "mf-admin" */ './products/products-admin.component').then(m => m.ProductsAdminComponent) },
];
