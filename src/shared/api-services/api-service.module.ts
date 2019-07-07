import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import * as ApiServices from './services';

@NgModule({
    providers: [
        ApiServices.ProductApiService
    ]
})
export class ServiceProxyModule { }
