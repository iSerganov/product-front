import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Product, ProductApiService, Category } from 'src/shared/api-services/services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productForm: FormGroup;
  product: Product;
  isNew: boolean;
  categories: Category[];
  constructor(private _fb: FormBuilder, private _service: ProductApiService, private _route: ActivatedRoute) {
    this.isNew = this._route.snapshot.params['id'].toLowerCase === 'new';
    if (!this.isNew) {
      this._service.getById(this._route.snapshot.params['id'].toLowerCase).subscribe(res => {
        this.product = res;
        this.initializeForm(res);
      });
    } else {
      this.initializeForm(new Product(
        {
          id: '',
          name: 'New awesome name for your peoduct',
          category: this.categories[0],
          isActive: true,
          price: 1
        }));
    }
  }


  ngOnInit() {
  }

  initializeForm(product: Product) {
    this.productForm = this._fb.group({
      name: product.name,
      category: product.category,
      price: product.price,
      isActive: product.isActive
    });
  }

}
