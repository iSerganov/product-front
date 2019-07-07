import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { HelpService } from './services/help.service';
import { ProductRoutingModule } from './product-routing.module';
import {
  MatCardModule,
  MatChipsModule,
  MatIconModule,
  MatButtonModule,
  MatDividerModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatInputModule,
  MatSlideToggleModule,
  MatTableModule,
  MatSelectModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListCommonModule } from '../common/application-common.module';
import { ServiceProxyModule } from 'src/shared/api-services/api-service.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CategoryResolverService } from './services/category-resolver.service';

@NgModule({
  declarations: [ProductComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatToolbarModule,
    FormsModule,
    MatInputModule,
    ProductListCommonModule,
    MatSlideToggleModule,
    MatTableModule,
    ServiceProxyModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatFormFieldModule
  ],
  providers: [HelpService, HttpClient, CategoryResolverService]
})
export class ProductModule { }
