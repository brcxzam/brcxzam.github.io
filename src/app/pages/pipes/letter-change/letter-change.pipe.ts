import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letterChange',
})
export class LetterChangePipe implements PipeTransform {
  transform(value: string): unknown {
    const letters: { [key: string]: number } = {
      a: 4,
      e: 3,
      i: 1,
      o: 0,
      u: 9,
    };
    return value
      .split('')
      .map((value) => {
        const letter = value.toLowerCase();
        return letters[letter] >= 0 ? letters[letter] : letter;
      })
      .join('');
  }
}
