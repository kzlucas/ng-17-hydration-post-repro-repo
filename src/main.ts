import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';

import { provideAnimations } from '@angular/platform-browser/animations';
import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';

import { withInterceptorsFromDi, provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutes } from 'src/app/app.routes';
import { InMemoryScrollingFeature, InMemoryScrollingOptions, provideRouter, withInMemoryScrolling } from '@angular/router';



const scrollConfig: InMemoryScrollingOptions = {
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled',
};
const inMemoryScrollingFeature: InMemoryScrollingFeature = withInMemoryScrolling(scrollConfig);

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(AppRoutes, inMemoryScrollingFeature),
        provideHttpClient(withInterceptorsFromDi(), withFetch()),
        provideClientHydration(),
        provideAnimations(),
        importProvidersFrom(/* ... */),
    ]
})
    .catch(err => console.error(err));
