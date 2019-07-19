import {SupplierRegistryService} from '../supplier-registry.service';
import {InjectorInstance} from '../../gstate-root.module';
import {Lambda} from '../util/suppler.util';

export function Set(metaKey: string): PropertyDecorator {
  return (target: any, key: string | symbol, descriptor?: TypedPropertyDescriptor<Lambda>) => {
    let originalValue = (): any => {};

    function wrapped(...args: any[]) {
      const result = originalValue.apply(target, args);
      const supplier: SupplierRegistryService = InjectorInstance.get<SupplierRegistryService>(SupplierRegistryService);
      supplier.set(metaKey, result);

      return result;
    }

    Object.defineProperty(target, key, {
      set: (lambda: Lambda) => originalValue = lambda,
      get: () => wrapped
    });

    return descriptor;
  };
}
