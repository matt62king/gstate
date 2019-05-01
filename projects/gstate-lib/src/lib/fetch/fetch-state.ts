export const FetchState = (fn: any, ...args: any[]) =>
  (target, propertyKey: string) => {

    const getter = () => fn(...args);

    const setter = (next) => console.log(propertyKey + ' cannot be set directly');

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
