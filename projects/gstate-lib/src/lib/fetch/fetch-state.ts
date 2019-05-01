export const FetchState = (fn: any, ...args: any[]) =>
  (target, propertyKey: string) => {
    let val = fn;

    const getter = () =>  {
      return fn(...args);
    };

    const setter = (next) => {
      val = `🍦 ${next} 🍦`;
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
