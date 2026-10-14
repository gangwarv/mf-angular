// added this import to fix the error "Cannot find module '@angular/compiler' or its corresponding type declarations.ts(2307)"
import '@angular/compiler';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
