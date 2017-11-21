import { NavigationExtras } from '@angular/router';

export class RoutingUtil {
  static navigate(router, options) {
    const navigationExtras: NavigationExtras = {
      queryParamsHandling: 'merge',
      preserveFragment: true
    };

    router.navigate(options, navigationExtras);
  }

  // not preserve query params - this will replace the existing with the new ones
  static replaceQPAndNavigate(router, options, queryParams) {
    const navigationExtras: NavigationExtras = {
      queryParams: queryParams
    };

    router.navigate(options, navigationExtras);
  }
}
