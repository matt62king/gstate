import {getConsumers} from '../consumer/consumer-registry.service';

export const Supplier = (metaKey: string) =>
  (target: object, key: string | symbol, descriptor: PropertyDescriptor) => {
    const original = descriptor.value;

    descriptor.value = ( ... args: any[]) => {
      const result = original.apply(this, args);

      if (result) {
        getConsumers(metaKey)
          .forEach((consumer) => {
            consumer.target[consumer.propertyKey] = result;
          });
      }

      return origin;
    };

    return descriptor;
  };
