import {ModuleWithProviders, NgModule} from '@angular/core';
import {GstateRootModule} from './gstate-root.module';

@NgModule()
export class GstateModule {

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: GstateRootModule,
      providers: []
    };
  }
}
