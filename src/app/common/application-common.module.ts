import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule, MatButtonModule, MatIconModule } from '@angular/material';
import { SortMenuComponent } from './components/sort-menu/sort-menu.component';

@NgModule({
  declarations: [SortMenuComponent],
  imports: [CommonModule, MatMenuModule, MatButtonModule, MatIconModule],
  exports: [SortMenuComponent]
})
export class ProductListCommonModule {}
