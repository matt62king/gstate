
import {addConsumer} from './consumer-registry.service';
import {Observable, Subject} from 'rxjs';

export function Consumer(metaKey: any): PropertyDecorator {
  return (target: object, propertyKey: string) => {
    let value = new Subject();
    addConsumer(metaKey, target, propertyKey, value);

    function get(): Observable<any> {
      return value;
    }

    function set(obj: any) {
      value = obj;
    }

    Object.defineProperty(target, propertyKey, {get, set});
  };
}
