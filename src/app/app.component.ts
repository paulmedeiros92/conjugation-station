import { Component } from '@angular/core';
import { VerbService } from 'src/app/services/verb.service';
import { TenseService } from './services/tense.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { PronounService } from './services/pronoun.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'conjugation-station';
  quizForm;

  constructor(
    public verbService: VerbService,
    public tenseService: TenseService,
    private pronounService: PronounService,
    private formBuilder: FormBuilder,
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
    console.log(value)
  }
}
