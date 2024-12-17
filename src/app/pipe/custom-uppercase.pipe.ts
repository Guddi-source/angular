import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customUppercase',
  standalone: true
})
export class CustomUppercasePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value;
  }

}
