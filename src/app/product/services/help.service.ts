import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from 'src/shared/api-services/services';

type SortFunction = (param1: any, b: any) => number;

@Injectable({
  providedIn: 'root'
})
export class HelpService {
  private products: Product[];

  constructor() {
  }

  public getAllProducts(): Observable<Product[]> {
    return of(this.products);
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
