import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';
import { ProductsPage } from './products-page';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, ProductsPage],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the products table', () => {
    const fixture = TestBed.createComponent(ProductsPage);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Products');
    expect(compiled.querySelectorAll('tbody tr').length).toBe(4);
    expect(compiled.querySelector('tbody')?.textContent).toContain('Everyday Backpack');
  });
});
