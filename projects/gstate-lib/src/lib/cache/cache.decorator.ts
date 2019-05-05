import {CacheService} from './cache.service';

export const Cacheable = (cacheKey: string) =>
  (target, key: string | symbol, descriptor: PropertyDescriptor) => {
    const original = descriptor.value;

    descriptor.value = ( ... args: any[]) => {
      if (CacheService.hasRegistry(cacheKey)) {
        return CacheService.getRegistry(cacheKey);
      } else {
        const result = original.apply(this, args);

        if (result) {
          CacheService.register(cacheKey, result);
        }

        return result;
      }
    };

    return descriptor;
  };

export const CacheEvict = (cacheKey: string) =>
  (target, key: string | symbol, descriptor: PropertyDescriptor) => {
    const original = descriptor.value;

    descriptor.value = (...args: any[]) => {
      CacheService.clearRegistry(cacheKey);
      return original.apply(this, args);
    };

    return descriptor;
  };
