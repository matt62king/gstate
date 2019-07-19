import {SupplierRegistryService} from '../supplier-registry.service';
import {InjectorInstance} from '../../gstate-root.module';
import {Lambda} from '../util/suppler.util';

export function Pull(metaKey: string, targetProperty: string | symbol): PropertyDecorator {
  return (target: any, key: string | symbol, descriptor?: TypedPropertyDescriptor<Lambda>) => {
    let originalValue = (): any => {};

    function wrapped(...args: any[]) {
      const supplier: SupplierRegistryService = InjectorInstance.get<SupplierRegistryService>(SupplierRegistryService);
      target[targetProperty] = supplier.pull(metaKey);

      return originalValue.apply(target, args);
    }

    Object.defineProperty(target, key, {
      set: (lambda: Lambda) => originalValue = lambda,
      get: () => wrapped
    });

    return descriptor;
  };
}
