import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products-page',
  imports: [CurrencyPipe],
  template: `
    <header class="page-heading">
      <div>
        <p class="eyebrow">CATALOG</p>
        <h1>Products</h1>
        <p class="subtitle">A quick look at the items in your store.</p>
      </div>
      <span class="count">{{ products.length }} products</span>
    </header>

    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">SKU</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">In stock</th>
          </tr>
        </thead>
        <tbody>
          @for (product of products; track product.sku) {
            <tr>
              <td class="product-name">{{ product.name }}</td>
              <td>{{ product.sku }}</td>
              <td>{{ product.category }}</td>
              <td>{{ product.price | currency }}</td>
              <td>{{ product.stock }}</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  `,
  styleUrl: './products-page.css',
})
export class ProductsPage {
  protected readonly products = [
    { name: 'Everyday Backpack', sku: 'BAG-001', category: 'Accessories', price: 59.99, stock: 24 },
    {
      name: 'Ceramic Travel Mug',
      sku: 'MUG-014',
      category: 'Home & Kitchen',
      price: 18.5,
      stock: 42,
    },
    { name: 'Classic Cotton Tee', sku: 'APP-108', category: 'Apparel', price: 24, stock: 16 },
    {
      name: 'Wireless Desk Lamp',
      sku: 'HOM-220',
      category: 'Home & Kitchen',
      price: 42.75,
      stock: 9,
    },
  ];
}
