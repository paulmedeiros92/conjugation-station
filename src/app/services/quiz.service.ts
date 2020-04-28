import { Injectable } from '@angular/core';
import { QuizOptions } from '../models/quiz-options.model';
import { Question } from '../models/question.model';
import { VerbService } from './verb.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private _options: QuizOptions = new QuizOptions();
  constructor(private verbService: VerbService) {}

  makeTest(): Question[] {
    const applicableVerbs = this.verbService.verbsByType(this._options.verbs);
    this.verbService.types.map(type => {
      
    })
  }
  
  get options(): QuizOptions {
    return this._options;
  }
  set options(options: QuizOptions) {
    this._options = options;
  }
}
