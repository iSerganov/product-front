import { Pipe, PipeTransform } from '@angular/core';
import { Tariff } from '../models/tariff';

@Pipe({
  name: 'filterTariffs',
  pure: false
})
export class FilterTariffsPipe implements PipeTransform {
  transform(items: Tariff[], args: string): Tariff[] {
    if (!args) {
      return items;
    }
    return items.filter(
      item =>
        item.name.toLowerCase().indexOf(args.toLowerCase()) !== -1 ||
        item.downloadSpeed.toString().toLowerCase().indexOf(args.toLowerCase()) !== -1 ||
        item.uploadSpeed.toString().toLowerCase().indexOf(args.toLowerCase()) !== -1 ||
        item.price.toString().toLowerCase().indexOf(args.toLowerCase()) !== -1 ||
        item.benefits.some(ben => ben.toLowerCase().includes(args.toLowerCase()))
    );
  }
}
