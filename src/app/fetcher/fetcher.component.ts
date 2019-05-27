import {Component, OnInit} from '@angular/core';
import {Consumer} from '../../../projects/gstate-lib/src/lib/consumer/consumer.decorator';
import {Observable} from 'rxjs';
import {FetchTestService} from '../fetch-test.service';
import {Patch, Set} from '../../../projects/gstate-lib/src/lib/supplier/supplier.decorator';
import {State} from './state';

@Component({
  selector: 'app-fetcher',
  templateUrl: './fetcher.component.html',
  styleUrls: ['./fetcher.component.css'],
})
export class FetcherComponent implements OnInit {

  @Consumer('testKey')
  fetchTest$: Observable<State>;

  constructor(private fetch: FetchTestService) {
  }

  ngOnInit() {
  }

  changeMessage(): void {
    this.fetch.supplierTest({string1: 'first supplied value'});
  }

  changeMessage2(): void {
    this.fetch.supplierTest({string2: 'second supplied value'});
  }

  @Patch('testKey') directPatch = (value: string): Partial<State> => ({string3: value});

  @Set('testKey') reset = (): State => ({string1: undefined, string2: undefined, string3: undefined});
}
