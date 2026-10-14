import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';
import { HomePage } from './home-page';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, HomePage],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the shell navigation', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('nav')?.textContent).toContain('Products');
    expect(compiled.querySelector('nav')?.textContent).toContain('Orders');
  });

  it('should render the home page sections', () => {
    const fixture = TestBed.createComponent(HomePage);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Welcome to your workspace');
    expect(compiled.querySelectorAll('.section-card').length).toBe(2);
  });
});
