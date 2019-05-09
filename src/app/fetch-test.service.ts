import {SupplierRegistryService} from '../../projects/gstate-lib/src/lib/supplier/supplier-registry.service';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchTestService {

  constructor(private supplierRegistry: SupplierRegistryService) {
  }

  public supplierTest(value: string): void {
    this.supplierRegistry.patch('testKey', value);
  }
}
