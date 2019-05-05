import {NgModule} from '@angular/core';
import {CacheService} from './cache/cache.service';

@NgModule()
export class GstateRootModule {

  constructor(private stateCache: CacheService) {
  }
}
