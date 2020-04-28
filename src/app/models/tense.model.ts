export class Tense {
  private _name: string;
  private _definition: string;

  constructor(name: string, definition: string) {
    this._name = name;
    this._definition = definition;
  }

  get name(): string {
    return this._name;
  }

  get definition(): string {
    return this._definition;
  }

}