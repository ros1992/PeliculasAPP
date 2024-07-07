import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pares',
  standalone: true
})
export class ParesPipe implements PipeTransform {

  transform(value: any[]): any[] {
    if (!Array.isArray(value) || value.length === 0) {
      return [];
    }
    const result = [];
    for (let i = 0; i < value.length; i += 2) {
      result.push(value.slice(i, i + 2));
    }
    return result;
  }

}
