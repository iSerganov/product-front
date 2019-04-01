import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TariffComponent } from './components/tariff/tariff.component';


const routes: Routes = [
  {
    path: '',
    component: TariffComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TariffRoutingModule { }