
import {ConsumerRegistry} from './consumer-registry.service';

export const Consumer = (metaKey: any) =>
  (target: object, propertyKey: string) => {
    ConsumerRegistry.addConsumer(metaKey, target, propertyKey);
  };
