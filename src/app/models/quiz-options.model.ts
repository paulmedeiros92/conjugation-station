export class QuizOptions {
  private _verbs: string[];
  private _tenses: string[];
  private _pronouns: string[];

  constructor(pronouns: string[] = [], verbs: string[] = [], tenses: string[] = []) {
    this._pronouns = pronouns;
    this._verbs = verbs;
    this._tenses = tenses;
  }

  get verbs(): string[] {
    return this._verbs;
  }

  get tenses(): string[] {
    return this._tenses;
  }

  get pronouns(): string[] {
    return this._pronouns;
  }
}