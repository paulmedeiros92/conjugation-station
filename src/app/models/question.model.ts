export class Question {
  private _question: string;
  private _answer: string;

  constructor(question: string, answer: string) {
    this._question = question;
    this._answer = answer;
  }

  isCorrect(input: string) {
    return this._answer ? this._answer === input : false
  }

  get question(): string {
    return this._question;
  }
}