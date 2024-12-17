import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendString',
  standalone: true
})
export class AppendStringPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
