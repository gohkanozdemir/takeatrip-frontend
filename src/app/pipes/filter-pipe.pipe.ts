import { Pipe, PipeTransform } from '@angular/core';
import { CarWithDetails } from '../models/carWithDetails';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: CarWithDetails[], filterCar: string): CarWithDetails[] {
    filterCar = filterCar ? filterCar.toLocaleLowerCase() : '';
    return filterCar
      ? value.filter(
          (p: CarWithDetails) =>
            p.carName.toLocaleLowerCase().indexOf(filterCar) !== -1
        )
      : value;
  }

}
