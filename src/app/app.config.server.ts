import {mergeApplicationConfig, ApplicationConfig} from '@angular/core';
import {provideServerRendering, withRoutes} from '@angular/ssr';
import {appConfig} from './app.config';
import {serverRoutes} from './app.routes.server';
import {provideLottieServerOptions} from "ngx-lottie/server";

const serverConfig: ApplicationConfig = {
    providers: [
        provideServerRendering(withRoutes(serverRoutes)),
        provideLottieServerOptions({
            preloadAnimations: {
                folder: './dist/github-profile/browser/assets/animations',
                animations: ['backend.json', 'blog.json', 'cloud.json', 'crypto.json', 'education.json', 'email.json', 'experience.json', 'hired.json', 'home.json', 'loading.json', 'projects.json'],
            },
        }),
    ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
