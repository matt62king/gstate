import {Component} from '@angular/core';
import {Consumer} from '../../../projects/gstate-lib/src/lib/consumer/consumer.decorator';
import {Observable} from 'rxjs';
import {FetchTestService} from '../fetch-test.service';
import {State} from './state';
import {Patch} from '../../../projects/gstate-lib/src/lib/supplier/decorators/patch.decotrator';
import {Push} from '../../../projects/gstate-lib/src/lib/supplier/decorators/push.decorator';
import {Pull} from '../../../projects/gstate-lib/src/lib/supplier/decorators/pull.decorator';
import {Set} from '../../../projects/gstate-lib/src/lib/supplier/decorators/set.decorator';

@Component({
  selector: 'app-fetcher',
  templateUrl: './fetcher.component.html',
  styleUrls: ['./fetcher.component.css'],
})
export class FetcherComponent {

  @Consumer('testKey')
  fetchTest$: Observable<State>;

  pulledState: State;
  objectKeys = Object.keys;
  showPulledState: boolean;

  constructor(private fetch: FetchTestService) {
  }

  changeMessage(): void {
    this.fetch.supplierTest({string1: 'first supplied value'});
  }

  changeMessage2(): void {
    this.fetch.supplierTest({string2: 'second supplied value'});
  }

  @Patch('testKey') directPatch = (value: string): Partial<State> => ({string3: value});

  @Set('testKey') reset = (): State => ({string1: undefined, string2: undefined, string3: undefined});

  @Push('testKey') pushValue = (): any => {};

  @Pull('testKey', 'pulledState') pullValue = (): any => this.showPulledState = !this.showPulledState;
}

