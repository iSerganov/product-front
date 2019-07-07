import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { HelpService } from '../../services/help.service';
import { Subscription } from 'rxjs';
import { PropertyForSort } from 'src/app/common/models/property-for-sort';
import { Product, ProductApiService } from 'src/shared/api-services/services';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit, OnDestroy {
  products: MatTableDataSource<Product>;
  subscriptions: Subscription[] = [];
  filter = '';
  properties: PropertyForSort[];
  ascending = true;
  sortBy: PropertyForSort;
  displayedColumns: string[] = ['id', 'name', 'category', 'isActive', 'price', 'actions'];
  constructor(
    private _productService: ProductApiService,
    private _helpService: HelpService,
    private _cdr: ChangeDetectorRef,
    private _router: Router) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this._productService.get().subscribe(
        res => {
          this.products = new MatTableDataSource(res);
          this._cdr.detectChanges();
        },
        fail => {
          console.log(fail);
        }
      )
    );

    this.properties = [
      { field: 'name', name: 'Name', icon: 'child_care' },
      { field: 'price', name: 'Price', icon: 'euro_symbol' },
      {
        field: 'downloadSpeed',
        name: 'Download Speed',
        icon: 'cloud_download'
      },
      { field: 'uploadSpeed', name: 'Upload Speed', icon: 'cloud_upload' }
    ];
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }


  applyFilter() {
    this.products.filter = this.filter.trim().toLowerCase();
  }

  goToProduct(id: string): void {
    this._router.navigateByUrl(`products/product-details/${id}`);
  }

}
