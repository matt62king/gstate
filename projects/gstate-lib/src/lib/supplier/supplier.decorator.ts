import {getConsumers} from '../consumer/consumer-registry.service';

export const Supplier = (metaKey: string) =>
  (target: object, key: string | symbol, descriptor: PropertyDescriptor) => {
    const original = descriptor.value;

    descriptor.value = ( ... args: any[]) => {
      target.constructor.apply(target);
      const result = original.apply(target, args);

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
