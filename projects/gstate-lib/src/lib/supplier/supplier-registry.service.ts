import {Injectable} from '@angular/core';
import {DispatchController} from '../dispatch/dispatch-controller';

@Injectable({ providedIn: 'root' })
export class SupplierRegistryService {

  private registry = new Map<string, any>();

  constructor(private dispatch: DispatchController) {
  }

  public register(key: string, value: any, dispatch?: boolean): void {
    this.registry.set(key, value);

    if (dispatch) {
      this.dispatch.dispatch(key, value);
    }
  }

  public set(key: string, value: any): void {
    this.registry.delete(key);
    this.register(key, value, true);
  }

  public patch(key: string, value: Partial<any>): void {
    const original = this.registry.get(key);
    const merged = {...original, ...value};

    this.register(key, merged, true);
  }

  public push(key: string): void {
    const original = this.registry.get(key);

    this.register(key, {...original}, true);
  }

  public pull(key: string): any {
    return this.registry.get(key);
  }
}
