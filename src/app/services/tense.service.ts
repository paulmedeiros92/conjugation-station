import { Injectable } from '@angular/core';
import { Tense } from 'src/app/models/tense.model';

@Injectable({
  providedIn: 'root'
})
export class TenseService {
  private _tenses = [
    new Tense("Present", "actions currently happening"),
    new Tense("Preterite", "completed actions in the past"),
    new Tense("Imperfect", "continuing or repeated actions in the past"),
    new Tense("Pluperfect", "completed actions done before another action in the past"),
    new Tense("Future", "actions that will happen"),
    new Tense("Conditional", "actions that will occur based on a condition"),
  ]
  constructor() { }

  get tenses(): Tense[] {
    return this._tenses;
  }

  get tenseNames(): string[] {
    return this._tenses.map(tense => tense.name);
  }
}
