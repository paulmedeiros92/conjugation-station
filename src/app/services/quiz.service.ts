import { Injectable } from '@angular/core';
import { QuizOptions } from '../models/quiz-options.model';
import { VerbTreeQuestion } from '../models/verb-tree-question.model';
import { VerbService } from './verb.service';
import { ArrayShuffleService } from './array-shuffle.service';
import { Verb } from '../models/verb.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private _options: QuizOptions = new QuizOptions();
  private _questions: VerbTreeQuestion[] = [];
  constructor(private verbService: VerbService, private arrayShuffleService: ArrayShuffleService) {}

  makeTest(): VerbTreeQuestion[] {
    const verbTrees: VerbTreeQuestion[] = [];
    this.options.verbs.forEach(type => {
      const verbs = this.verbService.verbsByType([type]);
      const rVerb = this.arrayShuffleService.randomValue(verbs) as Verb;
      this.options.tenses.forEach(tense => {
        verbTrees.push(new VerbTreeQuestion(this.options.pronouns, tense, rVerb));
      });
    });
    return verbTrees; 
  }
  
  get options(): QuizOptions {
    return this._options;
  }
  set options(options: QuizOptions) {
    this._options = options;
  }
  get questions(): VerbTreeQuestion[] {
    return this._questions;
  }
  set questions(questions: VerbTreeQuestion[]) {
    this._questions = questions;
  }
}
