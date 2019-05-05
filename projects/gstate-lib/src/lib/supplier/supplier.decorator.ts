import {getConsumers} from '../consumer/consumer-registry.service';

export const Suppler = (metaKey: string) =>
  (target, key: string | symbol, descriptor: PropertyDescriptor) => {
    const original = descriptor.value;

    descriptor.value = ( ... args: any[]) => {
      const result = original.apply(this, args);

      if (result) {
        getConsumers(metaKey)
          .forEach((consumer) => {
            consumer.target[consumer.propertyKey] = result;
          });
      }

      return result;
    };

    return descriptor;
  };
