import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VerbService } from 'src/app/services/verb.service';
import { TenseService } from './services/tense.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { PronounService } from './services/pronoun.service';
import { QuizService } from './services/quiz.service';
import { QuizOptions } from './models/quiz-options.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'conjugation-station';

  constructor() { }
}
