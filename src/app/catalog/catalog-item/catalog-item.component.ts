import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../car.model';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.sass']
})
export class CatalogItemComponent implements OnInit {
  @Input() item: Car;
  @Input() index: number;
  constructor() { }

  ngOnInit(): void {
  }

}
