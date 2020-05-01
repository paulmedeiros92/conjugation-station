import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VerbService } from 'src/app/services/verb.service';
import { TenseService } from 'src/app/services/tense.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { PronounService } from 'src/app/services/pronoun.service';
import { QuizService } from 'src/app/services/quiz.service';
import { QuizOptions } from 'src/app/models/quiz-options.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  quizForm: FormGroup;

  constructor(
    private router: Router,
    public verbService: VerbService,
    public tenseService: TenseService,
    private pronounService: PronounService,
    private formBuilder: FormBuilder,
    private quizService: QuizService,
  ) {
    this.quizForm = this.formBuilder.group({
      pronouns: this.buildCheckboxGroup(
        [
          ...pronounService.pronounsByLanguage("portuguese").singular,
          ...pronounService.pronounsByLanguage("portuguese").plural
        ],
        [true, true, true, true]
      ),
      types: this.buildCheckboxGroup(verbService.types, [true]),
      tenses: this.buildCheckboxGroup(tenseService.tenses.map(tense => tense.name), [true])
    })
  }

  buildCheckboxGroup(labels: string[], checked: boolean[] = []): FormGroup {
    const group = {};
    if (checked.length > 0) {
      for (let i=0; i < labels.length; i++) {
        group[labels[i]] = new FormControl(checked[i] === true);
      }
    } else {
      labels.forEach(label => {
        group[label] = new FormControl(false);
      })
    }
    return this.formBuilder.group(group);
  }

  onSubmit(value) {
    const pronouns = Object.keys(value.pronouns).filter(key => value.pronouns[key]);
    const types = Object.keys(value.types).filter(key => value.types[key]);
    const tenses = Object.keys(value.tenses).filter(key => value.tenses[key]);
    this.quizService.options = new QuizOptions(pronouns, types, tenses);
    this.quizService.questions = this.quizService.makeTest();
    this.router.navigateByUrl('/quiz');
  }

}
