import { ProductModel } from "./products.model";
import { createAction, props } from "@ngrx/store";

// export class ProductsActions {}

export const setProducts = createAction(
  '[Products] Set Products',
  props<{ products: ProductModel[] }>()
);
