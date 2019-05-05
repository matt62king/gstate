import {Cacheable, CacheEvict} from '../../projects/gstate-lib/src/lib/cache/cache.decorator';
import {Observable, of} from 'rxjs';
import {Suppler} from '../../projects/gstate-lib/src/lib/supplier/supplier.decorator';

export class FetchTestService {

  private static testValue$: Observable<string> | undefined  = undefined;

  @Cacheable('test')
  public static testMethod(): Observable<string> | undefined {
    return FetchTestService.testValue$;
  }

  @CacheEvict('test')
  public static registerTest(): void {
    console.log('set testValue$');
    FetchTestService.testValue$ = of('test method');
  }

  @Suppler('testKey')
  public static supplierTest(): Observable<string> {
    return of('from supplier test static method');
  }
}
