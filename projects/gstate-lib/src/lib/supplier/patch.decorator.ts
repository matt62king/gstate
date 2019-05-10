import {SupplierRegistryService} from './supplier-registry.service';
import {InjectorInstance} from '../gstate-root.module';

export type Lambda = (...args: any) => any;

export const Patch = (metaKey: any): PropertyDecorator => {
  return (target: any, key: string | symbol, descriptor?: TypedPropertyDescriptor<Lambda>) => {
    let originalValue = (): any => {};

    function wrapped(...args: any[]) {
      const result = originalValue.apply(target, args);
      const supplier: SupplierRegistryService = InjectorInstance.get<SupplierRegistryService>(SupplierRegistryService);
      supplier.patch(metaKey, result);

      return result;
    }

    Object.defineProperty(target, key, {
      set: (lambda: Lambda) => originalValue = lambda,
      get: () => wrapped
    });

    return descriptor;
  };
};
