import {SupplierRegistryService} from '../../projects/gstate-lib/src/lib/supplier/supplier-registry.service';
import {Injectable} from '@angular/core';
import {Patch} from '../../projects/gstate-lib/src/lib/supplier/patch.decorator';

@Injectable({
  providedIn: 'root'
})
export class FetchTestService {

  constructor(private supplierRegistry: SupplierRegistryService) {
  }

  public supplierTest(value: string): void {
    this.test(value);
  }

  @Patch('testKey') test = (value: string) => value;
}
