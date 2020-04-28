export class QuizOptions {
  private _verbs: string[];
  private _tenses: string[];

  constructor(verbs: string[] = [], tenses: string[] = []) {
    this._verbs = verbs;
    this._tenses = tenses;
  }

  get verbs(): string[] {
    return this._verbs;
  }

  get tenses(): string[] {
    return this._tenses;
  }
}