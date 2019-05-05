import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent } from './app.component';
import {GstateModule} from '../../projects/gstate-lib/src/lib/gstate.module';
import {FetcherComponent} from './fetcher/fetcher.component';

@NgModule({
  declarations: [
    AppComponent,
    FetcherComponent
  ],
  imports: [
    BrowserModule,
    GstateModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
