import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sort' })
export class SortPipe implements PipeTransform {
  transform(value: number[]): number[] {
    return value.sort((a, b) => a - b);
  }
}

// <ul>
//   <li *ngFor="let number of numbers | sort">{{ number }}</li>
// </ul>
