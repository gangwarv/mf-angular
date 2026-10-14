// export class ProductsSelectors {}

import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductsState } from "./products.reducer";

// 1 line selector
// export const selectProducts = (state: ProductsState) => state.products;
// OR

export const selectProductsState = createFeatureSelector<ProductsState>('products');

export const selectProducts = createSelector(
  selectProductsState,
  (state: ProductsState) => state.products
);