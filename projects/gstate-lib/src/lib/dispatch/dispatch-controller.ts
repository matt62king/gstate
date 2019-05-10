import {ConsumerModel} from '../consumer/consumer.model';
import {getConsumers} from '../consumer/consumer-registry.service';
import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DispatchController {

  public dispatch(key: string, value: any): void {
    const consumers: ConsumerModel[] = getConsumers(key);

    consumers.forEach((consumer) => {
      consumer.subject.next(value);
    });
  }
}
