import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CategoryResolverService } from './services/category-resolver.service';


const routes: Routes = [
  {
    path: '',
    component: ProductComponent
  },
  {
    path: 'product-details/:id', component: ProductDetailsComponent, resolve: {
      array: CategoryResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }