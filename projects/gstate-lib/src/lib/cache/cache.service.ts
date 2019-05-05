import {Injectable} from '@angular/core';

@Injectable( {
  providedIn: 'root'
})
export class CacheService {

  private static cacheRegistry: {[key: string]: any} = {};

  public static  register(key: string, val: any): void {
    CacheService.cacheRegistry[key] = val;
  }

  public static getRegistry(key: string): void {
    return CacheService.cacheRegistry[key];
  }

  public static clearRegistry(key: string): void {
    CacheService.cacheRegistry[key] = undefined;
  }

  public static hasRegistry(key: string): boolean {
    return CacheService.cacheRegistry[key] !== undefined;
  }
}
