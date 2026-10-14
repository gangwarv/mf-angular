import { Routes } from '@angular/router';
import { OrdersPage } from './orders-page';

export const routes: Routes = [
  { path: 'orders', component: OrdersPage },
  { path: '', redirectTo: 'orders', pathMatch: 'full' },
  { path: '**', redirectTo: 'orders' },
];
