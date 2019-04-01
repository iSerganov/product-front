import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TariffComponent } from './components/tariff/tariff.component';
import { TariffService } from './services/tariff.service';
import { TariffRoutingModule } from './tariff-routing.module';
import {
  MatCardModule,
  MatChipsModule,
  MatIconModule,
  MatButtonModule,
  MatDividerModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatInputModule,
  MatSlideToggleModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FilterTariffsPipe } from './pipes/filter-tariffs.pipe';
import { HighlightSearch } from './pipes/highlight.pipe';
import { TariffListCommonModule } from '../common/application-common.module';

@NgModule({
  declarations: [TariffComponent, FilterTariffsPipe, HighlightSearch],
  imports: [
    CommonModule,
    TariffRoutingModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatToolbarModule,
    FormsModule,
    MatInputModule,
    TariffListCommonModule,
    MatSlideToggleModule
  ],
  providers: [TariffService]
})
export class TariffModule {}
