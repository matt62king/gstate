import {ConsumerModel} from './consumer.model';
import {Subject} from 'rxjs';

export const registry: ConsumerModel[] = [];

export const addConsumer = (key: string, obj: object, property: string, value: Subject<any>): void => {
  const consumer = ({metaKey: key, target: obj, propertyKey: property, subject: value});
  registry.push(consumer);
};

export const getConsumers = (metaKey: string): ConsumerModel[] => {
  return registry
    .filter((consumer) => consumer.metaKey === metaKey);
};
