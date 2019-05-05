import {Injectable} from '@angular/core';
import {ConsumerModel} from './consumer.model';

@Injectable({
  providedIn: 'root'
})
export class ConsumerRegistry {
  private static registry: ConsumerModel[] = [];

  public static addConsumer(metaKey: string, target: object, propertyKey: string) {
    this.registry.push(new ConsumerModel(metaKey, target, propertyKey));
  }

  public static getConsumers(metaKey: string): ConsumerModel[] {
    return this.registry
      .filter((consumer) => consumer.metaKey === metaKey);
  }
}
