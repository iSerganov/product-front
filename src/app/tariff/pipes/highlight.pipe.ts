import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightSearch implements PipeTransform {
  transform(value: any, args: any): string {
    if (!args) {
      return value;
    }
    const re = new RegExp(args, 'gi');
    return value.toString().replace(re, '<mark>$&</mark>');
  }
}
