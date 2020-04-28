export class Pronoun {
  private _singular: string[];
  private _plural: string[];

  constructor(singular: string[], plural: string[]) {
    this._singular = singular;
    this._plural = plural;
  }

  get singular(): string[] {
    return this._singular;
  }

  get plural(): string[] {
    return this._plural;
  }
}