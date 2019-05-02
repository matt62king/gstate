import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {applyCache, StateCacheService} from '../../projects/gstate-lib/src/lib/cache/state-cache.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    StateCacheService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(cache: StateCacheService) {
    applyCache(cache);
  }
}
