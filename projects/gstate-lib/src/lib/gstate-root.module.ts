import {Injector, NgModule} from '@angular/core';

export let InjectorInstance: Injector;

@NgModule()
export class GstateRootModule {

  constructor(private injector: Injector) {
    InjectorInstance = this.injector;
  }
}
