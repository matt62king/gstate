import {ModuleWithProviders, NgModule} from '@angular/core';
import {GstateRootModule} from './gstate-root.module';
import {CacheService} from './cache/cache.service';
import {ConsumerRegistry} from './consumer/consumer-registry.service';

@NgModule()
export class GstateModule {

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: GstateRootModule,
      providers: [
        ConsumerRegistry,
        CacheService
      ]
    };
  }
}
