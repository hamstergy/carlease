import {Component, OnDestroy, OnInit} from '@angular/core';
import { Car } from '../car.model';
import {CatalogService} from '../catalog.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass']
})
export class CategoryComponent implements OnInit, OnDestroy {
  isLoadingResults = true;
  currentMonth = new Date().toLocaleString('default', { month: 'long' });
  currentYear = new Date().toLocaleString('default', { year: 'numeric' });
  items: Car[] = [];
  paramsSubscription: Subscription;
  constructor( private catalogService: CatalogService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe( (params: Params) => {
      this.getAllCarsFromCategory(params['slug']);
    });
  }
  getAllCarsFromCategory(slug) {
    this.catalogService.getModelsByMake(slug).subscribe(
        data => {
          if (data.length > 0) {
            this.items = data;
            this.isLoadingResults = false;
          } else {
            this.items = [];
            this.isLoadingResults = false;
          }
          },
        err => console.log(err)
    );
  }
  get getSortingItems(): Car[] {
    let boom = 'sedan';
    return _.filter(this.items, {'className': boom});
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

}
