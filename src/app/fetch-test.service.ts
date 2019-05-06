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

  private httpClient =  InjectorInstance.get<HttpClient>(HttpClient);

  constructor(private http: HttpClient) {

  }

  @Cacheable('test')
  public static testMethod(): Observable<string> | undefined {
    return FetchTestService.testValue$;
  }

  @CacheEvict('test')
  public static registerTest(): void {
    console.log('set testValue$');
    FetchTestService.testValue$ = of('test method');
  }

  // @Supplier('testKey')
  public supplierTest(): Observable<string> {
    console.log(this.http);
    console.log(this.httpClient);
    return of('from supplier test static method');
  }
}

export class FetchSupplier {

  private static fetchService = InjectorInstance.get<FetchTestService>(FetchTestService);

  @Supplier('testKey')
  public static supplyTestRelay(): Observable<string> {
    return this.fetchService.supplierTest();
  }
}
