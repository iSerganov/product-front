import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { PropertyForSort } from '../../models/property-for-sort';

@Component({
  selector: 'app-sort-menu',
  templateUrl: './sort-menu.component.html',
  styleUrls: ['./sort-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortMenuComponent implements OnInit {
  sortBy: string;
  @Input() properties: PropertyForSort[];
  @Output() changeSorting = new EventEmitter<PropertyForSort>();
  constructor() {
    this.changeSorting.subscribe(res => {
      this.sortBy = res.name;
    });
  }

  ngOnInit(): void {}
}
