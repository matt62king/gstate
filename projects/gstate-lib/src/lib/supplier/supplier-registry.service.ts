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

  public patch(key: string, value: any): void {
    this.registry.delete(key);
    this.register(key, value, true);
  }
}
