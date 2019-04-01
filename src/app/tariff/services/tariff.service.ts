import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tariff } from '../models/tariff';

type SortFunction = (param1: any, b: any) => number;

@Injectable({
  providedIn: 'root'
})
export class TariffService {
  private tariffs: Tariff[];

  constructor() {
    this.tariffs = [
      new Tariff('Starter', 12, 6, 100, ['cheap', 'reliable']),
      new Tariff('Advanced', 25, 15, 150, ['fast', 'reliable', 'some benefit']),
      new Tariff('Awesome', 75, 50, 200, [
        'super-fast',
        'reliable',
        'always online'
      ]),
      new Tariff('Premium', 100, 100, 300, [
        'like a rocket',
        'reliable',
        'simply outstanding'
      ]),
      new Tariff('Unbelievable', 500, 400, 1000, [
        'like an unbelievable rocket',
        'reliable',
        'cashback'
      ])
    ];
  }

  public getAllTariffs(): Observable<Tariff[]> {
    return of(this.tariffs);
  }

  public sortByProp(field: string, ascending = true): SortFunction {
    let sortOrder = 1;
    if (!ascending) {
      sortOrder = -1;
    }
    return function(a, b) {
      const result = a[field] < b[field] ? -1 : a[field] > b[field] ? 1 : 0;
      return result * sortOrder;
    };
  }
}
