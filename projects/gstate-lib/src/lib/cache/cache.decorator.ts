import {StateCacheService} from './state-cache.service';
import {keyframes} from '@angular/animations';

let cache: StateCacheService;

export const setStatCache = (stateCache: StateCacheService) => {
  cache = stateCache;
};

export const Cacheable = (cacheKey: string) =>
  (target, key: string | symbol, descriptor: PropertyDescriptor) => {
    const original = descriptor.value;

    descriptor.value = ( ... args: any[]) => {
      if (cache.hasValue(cacheKey)) {
        return cache.retrieveFromCache(cacheKey);
      } else {
        const result = original.apply(this, args);
        cache.storeCacheEntry(cacheKey, result);

        return result;
      }
    };

    return descriptor;
  };

export const CacheEvict = (cacheKey: string) =>
  (target, key: string | symbol, descriptor: PropertyDescriptor) => {
    const original = descriptor.value;

    descriptor.value = (...args: any[]) => {
      cache.clearCacheEntry(cacheKey);
      return original.apply(this, args);
    };

    return descriptor;
  };
