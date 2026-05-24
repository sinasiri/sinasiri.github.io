import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import {provideClientHydration} from '@angular/platform-browser';
import {provideCacheableAnimationLoader, provideLottieOptions} from 'ngx-lottie';
import player from 'lottie-web';
import {routes} from "./app.routes";

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(routes),
        provideClientHydration(),
        provideLottieOptions({
            player: () => player,
        }),
        provideCacheableAnimationLoader(),
    ],
};