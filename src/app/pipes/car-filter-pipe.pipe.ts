import { CarDetail } from './../models/carDetail';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilterPipe',
})
export class CarFilterPipePipe implements PipeTransform {
  transform(value: CarDetail[], filterText: string): CarDetail[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';
    return filterText
      ? value.filter(
          (x: CarDetail) =>
            x.brandName.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }
}
