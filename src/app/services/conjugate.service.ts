import { Injectable } from '@angular/core';
import { RegularVerbEndings } from 'src/app/static-resources/regular-verb-endings';

@Injectable({
  providedIn: 'root'
})
export class ConjugateService {

  endings = RegularVerbEndings;
  constructor() { }

  conjugate(verb, tense, pronoun) {

  }
}
