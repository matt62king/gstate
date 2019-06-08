import {SupplierRegistryService} from '../../projects/gstate-lib/src/lib/supplier/supplier-registry.service';
import {Injectable} from '@angular/core';
import {State} from './fetcher/state';
import {Patch} from '../../projects/gstate-lib/src/lib/supplier/decorators/patch.decotrator';

@Injectable({
  providedIn: 'root'
})
export class FetchTestService {

  constructor(private supplierRegistry: SupplierRegistryService) {
  }

  public supplierTest(value: Partial<State>): void {
    this.test(value);
  }

  @Patch('testKey') test = (value: Partial<State>) => value;
}
