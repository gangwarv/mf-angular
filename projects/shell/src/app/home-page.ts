import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  template: `
    <section class="welcome">
      <p class="eyebrow">SELLER CENTER</p>
      <h1>Welcome to your workspace</h1>
      <p class="intro">A simple place to manage your products and orders.</p>
    </section>

    <section class="cards" aria-label="Workspace sections">
      <a class="section-card" routerLink="/products">
        <span class="card-icon" aria-hidden="true">P</span>
        <span>
          <strong>Products</strong>
          <small>Browse your product catalog</small>
        </span>
        <span class="arrow" aria-hidden="true">→</span>
      </a>
      <a class="section-card" routerLink="/orders">
        <span class="card-icon orders-icon" aria-hidden="true">O</span>
        <span>
          <strong>Orders</strong>
          <small>View and track customer orders</small>
        </span>
        <span class="arrow" aria-hidden="true">→</span>
      </a>
    </section>
  `,
  styleUrl: './home-page.css',
})
export class HomePage {}
