import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'awesome'
})
export class AwesomePipe implements PipeTransform {

  transform(value: string): string {
    return value ? 'Awesome' + value : '' ;
  }

}
