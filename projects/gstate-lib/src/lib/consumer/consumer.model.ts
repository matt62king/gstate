import {Subject} from 'rxjs';

export interface ConsumerModel {
  metaKey: string;
  target: object;
  propertyKey: string;
  subject: Subject<any>;
}
