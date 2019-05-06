import {Injector, NgModule} from '@angular/core';
import {CacheService} from './cache/cache.service';

export let InjectorInstance: Injector;

@NgModule()
export class GstateRootModule {

  constructor(private stateCache: CacheService,
              private injector: Injector) {
    InjectorInstance = this.injector;
  }
}
