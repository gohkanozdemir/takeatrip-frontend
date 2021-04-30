import { decimalDigest } from '@angular/compiler/src/i18n/digest';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  transform(value: number, rate:number): string {
    return (value +(value*rate/100)).toFixed(2)
  }

}
