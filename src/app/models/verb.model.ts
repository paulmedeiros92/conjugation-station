export class Verb {
  private _name: string;
  private _type: string;
  private _definition: string;

  constructor(name: string, type: string, definition: string) {
    this._name = name;
    this._type = type;
    this._definition = definition;
  }

  get name(): string {
    return this._name;
  }

  get type(): string {
    return this._type;
  }

  get definition(): string {
    return this._definition;
  }

}