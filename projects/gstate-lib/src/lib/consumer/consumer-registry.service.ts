import {ConsumerModel} from './consumer.model';

export const registry: ConsumerModel[] = [];

export const addConsumer = (metaKey: string, target: object, propertyKey: string) => {
  registry.push(new ConsumerModel(metaKey, target, propertyKey));
};

export const getConsumers = (metaKey: string): ConsumerModel[] => {
  return registry
    .filter((consumer) => consumer.metaKey === metaKey);
};
