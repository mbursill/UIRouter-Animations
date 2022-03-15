import { Injector } from '@angular/core';
import { UIRouter } from '@uirouter/core';

export class UIRouterConfig {
  /* UIRouter Config Function  */
  static async initialize(uiRouter: UIRouter, injector: Injector) {
    // Allow optional trailing slashes
    uiRouter.urlService.config.strictMode(false);
  }
}
