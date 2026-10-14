import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-orders-page',
  imports: [CurrencyPipe, DatePipe],
  template: `
    <header class="page-heading">
      <div>
        <p class="eyebrow">SALES</p>
        <h1>Orders</h1>
        <p class="subtitle">Recent customer orders and their status.</p>
      </div>
      <span class="count">{{ orders.length }} orders</span>
    </header>

    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th scope="col">Order</th>
            <th scope="col">Customer</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          @for (order of orders; track order.id) {
            <tr>
              <td class="order-id">{{ order.id }}</td>
              <td>{{ order.customer }}</td>
              <td>{{ order.date | date: 'MMM d, y' }}</td>
              <td>
                <span [class]="statusClass(order.status)">{{ order.status }}</span>
              </td>
              <td>{{ order.total | currency }}</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  `,
  styleUrl: './orders-page.css',
})
export class OrdersPage {
  protected readonly orders = [
    {
      id: 'ORD-1048',
      customer: 'Avery Johnson',
      date: '2026-10-13',
      status: 'Processing',
      total: 78.49,
    },
    { id: 'ORD-1047', customer: 'Morgan Lee', date: '2026-10-12', status: 'Shipped', total: 42.75 },
    {
      id: 'ORD-1046',
      customer: 'Jamie Patel',
      date: '2026-10-11',
      status: 'Delivered',
      total: 118,
    },
    { id: 'ORD-1045', customer: 'Taylor Kim', date: '2026-10-10', status: 'Delivered', total: 24 },
  ];

  protected statusClass(status: string): string {
    return `status status-${status.toLowerCase()}`;
  }
}
