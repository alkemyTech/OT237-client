import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contactPhone'
})
export class ContactPhonePipe implements PipeTransform {

  transform(value: string): string {
    const result = value.replace(/.{4}/g, '$&-');
    return result;
  }

}
