import { Routes } from '@angular/router';
import { HomePage } from './home-page';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  { path: '', component: HomePage },
  {
    path: 'products',
    loadComponent: () => loadRemoteModule('products', './Component').then((m) => m.ProductsPage),
  },
  {
    path: 'orders',
    loadComponent: () => loadRemoteModule('orders', './Component').then((m) => m.OrdersPage),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
