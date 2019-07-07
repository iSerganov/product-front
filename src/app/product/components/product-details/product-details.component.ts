import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Product, ProductApiService, Category } from 'src/shared/api-services/services';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  productForm: FormGroup;
  product: Product;
  loaded = false;
  isNew = false;
  categories: Category[];
  private _subscriptions: Subscription[] = [];
  constructor(private _fb: FormBuilder,
    private _service: ProductApiService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _toastr: ToastrService) {
  }


  ngOnInit() {
    this._route.data.subscribe(data => {
      this.categories = data.array.value[0];
      if (!data.array.value[1].id) {
        this.isNew = true;
        this.initializeForm(new Product(
          {
            id: '',
            name: 'New awesome name for your product',
            category: this.categories[0],
            isActive: true,
            price: 1
          }));
      } else {
        this.initializeForm(data.array.value[1]);
      }
      this.loaded = true;
    });

  }

  initializeForm(product: Product) {
    this.productForm = this._fb.group({
      id: product.id,
      name: product.name,
      category: product.category ? this.categories.find(c => c.id === product.category.id) : null,
      price: product.price,
      isActive: product.isActive
    });
  }

  ngOnDestroy() {
    this._subscriptions.forEach(s => s.unsubscribe());
  }

  save(): void {
    if (!this.isNew) {
      // tslint:disable-next-line:max-line-length
      this._service.put(this.productForm.value.id, this.productForm.value).subscribe(this.successCallback.bind(this), this.errorCallback.bind(this));
    } else {
      this.productForm.value.id = '00000000-0000-0000-0000-000000000000';
      this._service.add(this.productForm.value).subscribe(this.successCallback.bind(this), this.errorCallback.bind(this));
    }
  }

  private successCallback(product: Product): void {
    this._toastr.success(`Product '${product.name}' successfully saved`);
    setTimeout(() => {
      this._router.navigateByUrl(`products`);
    }, 1000);
  }

  private errorCallback(error): void {
    this._toastr.error(`Something went wrong: ${error.message}`);
  }

}
