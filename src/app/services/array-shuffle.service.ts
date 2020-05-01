import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayShuffleService {

  constructor() { }

  shuffle(array: any[]) {
    const mutable = array.slice();
    const result = [];
    let i;
    array.forEach(() => {
      i = Math.floor(Math.random() * mutable.length);
      result.push(mutable[i]);
      mutable.splice(i, 1);
    });
    return result;
  }

  randomValue(array: any[]) {
    return array[Math.floor(Math.random() * array.length)];
  }
}
