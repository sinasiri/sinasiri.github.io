import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import {provideClientHydration, withEventReplay} from '@angular/platform-browser';
import {routes} from "./app.routes";
import {provideCacheableAnimationLoader, provideLottieOptions} from "ngx-lottie";
import * as lottieNamespace from 'lottie-web';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(routes),
        provideLottieOptions({
            player: () => Promise.resolve(lottieNamespace),  // ← Return as Promise
        }),
        provideCacheableAnimationLoader(),
        provideClientHydration(withEventReplay())]
};