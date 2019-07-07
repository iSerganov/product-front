import { Injectable } from '@angular/core';
import {
    Resolve,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { Observable, of, EMPTY, forkJoin } from 'rxjs';
import { take, mergeMap, catchError, map } from 'rxjs/operators'
import { ProductApiService, Product } from 'src/shared/api-services/services';
@Injectable()
export class CategoryResolverService implements Resolve<any> {
    constructor(private _http: ProductApiService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
        const productId = state.url.substring(state.url.lastIndexOf('/') + 1);
        if (productId === 'new') {
            return forkJoin(this._http.availableCategories(), of(new Product())).pipe(catchError(error => {
                return EMPTY;
            }), map(res => {
                if (res) {
                    return of(res);
                } else {
                    return EMPTY;
                }
            })
            );
        } else {
            // tslint:disable-next-line:max-line-length
            return forkJoin(this._http.availableCategories(), this._http.getById(state.url.substring(state.url.lastIndexOf('/') + 1))).pipe(catchError(error => {
                return EMPTY;
            }), map(res => {
                if (res) {
                    return of(res);
                } else {
                    return EMPTY;
                }
            })
            );
        }
    }
}