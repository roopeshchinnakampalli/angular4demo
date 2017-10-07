import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'myCurrency'})
export class MyCurrency implements PipeTransform {
  transform(value: number): string {
      return "$ " + value;
  }
}