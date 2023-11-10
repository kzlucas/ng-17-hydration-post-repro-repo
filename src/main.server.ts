import { ApplicationConfig } from '@angular/core';
import { AppComponent } from './app/app.component';
import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { provideServerRendering } from '@angular/platform-server';
import { provideRouter } from '@angular/router';
import { AppRoutes } from 'src/app/app.routes';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';


const serverConfig: ApplicationConfig = {
  providers: [
    provideRouter(AppRoutes),
    provideServerRendering(),
    provideClientHydration(),
    provideHttpClient(withInterceptorsFromDi(), withFetch()),
  ]
};

const bootstrap = () => bootstrapApplication(AppComponent, serverConfig);

export default bootstrap;
