import { Verb } from 'src/app/models/verb.model';

export class VerbTreeQuestion {
  private _pronouns: string[];
  private _tense: string;
  private _verb: Verb;
  private _answers: string[];
  private _input: string[];

  constructor(pronouns: string[], tense: string, verb: Verb) {
    this._pronouns = pronouns;
    this._tense = tense;
    this._verb = verb;
    // compute answers for question
  }

  get pronouns(): string[] {
    return this._pronouns;
  }

  get tense(): string {
    return this._tense;
  }

  get verb(): Verb {
    return this._verb;
  }

  set input(input: string[]) {
    this._input = input;
    // compute which answer is correct
  }
}