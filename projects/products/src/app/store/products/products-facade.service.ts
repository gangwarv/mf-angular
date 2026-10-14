import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { setProducts } from "./products.actions";
import { ProductModel } from "./products.model";
import { selectProducts } from "./products.selectors";

@Injectable({
  providedIn: "root",
})
export class ProductsFacadeService {
    private store = inject(Store);

    products$ = this.store.select(selectProducts);

    addProducts(products: ProductModel[]) {
        this.store.dispatch(setProducts({ products }));
    }
}