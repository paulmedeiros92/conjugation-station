import { Injectable } from '@angular/core';
import { Pronoun } from '../models/pronoun.model';

@Injectable({
  providedIn: 'root'
})
export class PronounService {

  private _pronouns = {
    portuguese: new Pronoun(
      ["eu", "ele", "ela", "você"],
      ["nós", "eles", "elas", "vocês"]
    ),
  }
  constructor() { }

  pronounsByLanguage(language: string): Pronoun { 
    return this._pronouns[language];
  }
}
