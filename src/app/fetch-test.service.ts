import {Cacheable, CacheEvict} from '../../projects/gstate-lib/src/lib/cache/cache.decorator';
import {Observable, of} from 'rxjs';
import {Supplier} from '../../projects/gstate-lib/src/lib/supplier/supplier.decorator';
import {HttpClient} from '@angular/common/http';
import {InjectorInstance} from '../../projects/gstate-lib/src/lib/gstate-root.module';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchTestService {

  private static testValue$: Observable<string> | undefined  = undefined;

  constructor(private http: HttpClient) {
  }

  @Cacheable('test')
  public static testMethod(): Observable<string> | undefined {
    return FetchTestService.testValue$;
  }

  @CacheEvict('test')
  public static registerTest(): void {
    FetchTestService.testValue$ = of('test method');
  }

  public supplierTest(): Observable<string> {
    return of('from supplier test static method');
  }
}

export class FetchSupplier {

  @Supplier('testKey')
  public static supplyTestRelay(): Observable<string> {
    const fetchService = InjectorInstance.get<FetchTestService>(FetchTestService);
    return fetchService.supplierTest();
  }
}
