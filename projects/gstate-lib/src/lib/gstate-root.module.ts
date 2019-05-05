import {NgModule} from '@angular/core';
import {CacheService} from './cache/cache.service';
import {ConsumerRegistry} from './consumer/consumer-registry.service';

@NgModule()
export class GstateRootModule {

  constructor(private stateCache: CacheService,
              private consumerService: ConsumerRegistry) {
  }
}
