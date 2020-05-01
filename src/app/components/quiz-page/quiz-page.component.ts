import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { VerbTreeQuestion } from 'src/app/models/verb-tree-question.model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss']
})
export class QuizPageComponent {
  public questions: VerbTreeQuestion[];
  public answerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private quizService: QuizService) {
    this.questions = this.quizService.questions;
    this.answerForm = this.buildGroupsFromQuestions(this.questions);
  }

  buildGroupsFromQuestions(questions: VerbTreeQuestion[]): FormGroup {
    const group = {};
    questions.forEach(question => {
      const questionGroup = {};
      question.pronouns.forEach(pronoun => {
        questionGroup[pronoun] = new FormControl('', Validators.required);
      });
      group[this.cardTitle(question.verb.name, question.tense)] = new FormGroup(questionGroup);
    });
    return this.formBuilder.group(group);
  }

  cardTitle(name:string, tense: string):string {
    return `${name.charAt(0).toUpperCase() + name.slice(1)} (${tense})`;
  }
}
