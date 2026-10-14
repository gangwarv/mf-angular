import { setProducts } from "./products.actions";
import { ProductModel } from "./products.model";
import { createReducer, on } from "@ngrx/store";

// export class ProductsReducer {}

export interface ProductsState {
  products: ProductModel[];
}

export const initialState: ProductsState = {
  products: [],
};

export const productsReducer = createReducer(
  initialState,
  on(setProducts, (state, { products }) => ({ ...state, products }))
);