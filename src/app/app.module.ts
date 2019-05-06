import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent } from './app.component';
import {GstateModule} from '../../projects/gstate-lib/src/lib/gstate.module';
import {FetcherComponent} from './fetcher/fetcher.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FetcherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GstateModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
