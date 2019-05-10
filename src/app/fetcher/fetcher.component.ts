import {Component, OnInit} from '@angular/core';
import {Consumer} from '../../../projects/gstate-lib/src/lib/consumer/consumer.decorator';
import {Observable} from 'rxjs';
import {FetchTestService} from '../fetch-test.service';
import {Patch} from '../../../projects/gstate-lib/src/lib/supplier/patch.decorator';

@Component({
  selector: 'app-fetcher',
  templateUrl: './fetcher.component.html',
  styleUrls: ['./fetcher.component.css'],
})
export class FetcherComponent implements OnInit {

  @Consumer('testKey')
  fetchTest$: Observable<string>;

  constructor(private fetch: FetchTestService) {
  }

  ngOnInit() {
  }

  changeMessage(): void {
    this.fetch.supplierTest('first supplied value');
  }

  changeMessage2(): void {
    this.fetch.supplierTest('second supplied value');
  }

  @Patch('testKey') directPatch = (value: string) => value;
}
