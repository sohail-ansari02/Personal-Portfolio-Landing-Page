import { IMAGE_CONFIG, IMAGE_LOADER, ImageLoaderConfig } from '@angular/common';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withInMemoryScrolling,
  withViewTransitions,
} from '@angular/router';

import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // {
    //   provide: IMAGE_CONFIG,
    //   useValue: {
    //     placeholderResolution: 40
    //   }
    // },
    // {
    //   provide: IMAGE_LOADER,
    //   useValue: (config: ImageLoaderConfig) => {
    //     return `https://lh3.googleusercontent.com/a/ACg8ocJK-1lF8x2F3B4FeNBZiAuECyGFjXSnR12qC8vN8lq2qVFlr8U=s432-c-no`;
    //   },
    // },
    provideRouter(
      routes,
      // withEnabledBlockingInitialNavigation(),
    ),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
  ],
};
