import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { TariffService } from '../../services/tariff.service';
import { Tariff } from '../../models/tariff';
import { Subscription } from 'rxjs';
import { PropertyForSort } from 'src/app/common/models/property-for-sort';

@Component({
  selector: 'app-tariff',
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TariffComponent implements OnInit, OnDestroy {
  tariffs: Tariff[];
  subscriptions: Subscription[] = [];
  filter = '';
  properties: PropertyForSort[];
  ascending = true;
  sortBy: PropertyForSort;
  constructor(private _tariffService: TariffService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this._tariffService.getAllTariffs().subscribe(
        res => {
          this.tariffs = res;
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

  sort(prop: PropertyForSort = null): void {
    if (!prop && !this.sortBy) {
      return;
    }
    if (prop) {
      this.sortBy = prop;
    }
    this.tariffs.sort(
      this._tariffService.sortByProp(this.sortBy.field, this.ascending)
    );
  }
}
