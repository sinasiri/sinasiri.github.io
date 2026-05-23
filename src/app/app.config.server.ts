import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import {provideLottieOptions} from "ngx-lottie";

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes)),
    provideLottieOptions({
      player: () => null as any,
    }),
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
