
import {addConsumer} from './consumer-registry.service';

export const Consumer = (metaKey: any) =>
  (target: object, propertyKey: string) => {
    addConsumer(metaKey, target, propertyKey);
  };
