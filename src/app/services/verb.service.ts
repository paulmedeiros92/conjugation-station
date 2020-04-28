import { Injectable } from '@angular/core';
import { Verb } from 'src/app/models/verb.model';

@Injectable({
  providedIn: 'root'
})
export class VerbService {
  private _types = ["AR", "ER", "IR", "IRREGULAR"];
  private _verbs = [
    new Verb("falar", "AR", "to speak"),
    new Verb("comer", "ER", "to eat"),
    new Verb("partir", "IR", "to go"),
    new Verb("estar", "IRREGULAR", "to be"),
  ]
  constructor() { }

  get types(): string[] {
    return this._types;
  }

  verbsByType(options: string[]): Verb[] {
    return this._verbs.filter(verb => options.includes(verb.type));
  }
}
