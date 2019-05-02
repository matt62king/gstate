import {Injectable} from '@angular/core';
import {setStatCache} from './cache.decorator';

export const applyCache = (stateCache: StateCacheService) => {
  setStatCache(stateCache);
};

@Injectable( {
  providedIn: 'root'
})
export class StateCacheService {

  private cacheMap: Map<string, any> = new Map<string, any>();

  constructor() {
  }

  public hasValue(key: string): boolean {
    return this.cacheMap.has(key);
  }

  public retrieveFromCache(key: string): any | undefined {
    return this.cacheMap.get(key);
  }

  public storeCacheEntry(key: string, value: any): void {
    this.cacheMap.set(key, value);
  }

  public clearCacheEntry(key: string): void {
    this.cacheMap.delete(key);
  }
}
