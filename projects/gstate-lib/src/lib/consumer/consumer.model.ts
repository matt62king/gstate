export class ConsumerModel {
  public metaKey: string;
  public target: object;
  public propertyKey: string;

  constructor(metaKey: string, target: object, propertyKey: string) {
    this.metaKey = metaKey;
    this.target = target;
    this.propertyKey = propertyKey;
  }
}
