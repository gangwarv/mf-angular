import { Routes } from '@angular/router';
import { ProductsPage } from './products-page';
import { productsReducer } from './store/products/products.reducer';
import { provideState } from '@ngrx/store';

export const routes: Routes = [
  { 
    path: '',
    component: ProductsPage,
    providers: [
      provideState('products', productsReducer),
    ]
  },
  // { path: '', redirectTo: 'products', pathMatch: 'full' },
  // { path: '**', redirectTo: 'products' },
];
