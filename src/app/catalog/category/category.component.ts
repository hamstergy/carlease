import {Component, OnDestroy, OnInit} from '@angular/core';
import { Car } from '../car.model';
import {CatalogService} from '../catalog.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';
import * as _ from 'lodash';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import {map} from 'rxjs/operators';
import * as CategoryActions from './store/category.actions';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass']
})
export class CategoryComponent implements OnInit, OnDestroy {
  isLoadingResults = true;
  currentMonth = new Date().toLocaleString('default', { month: 'long' });
  currentYear = new Date().toLocaleString('default', { year: 'numeric' });
  activeRoute: string;
  items: Car[] = [];
  selectedSegment = '';
  paramsSubscription: Subscription;
  subscription: Subscription;

  constructor( private catalogService: CatalogService, private route: ActivatedRoute, private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.store.select('headerList').pipe(map(headerState => headerState.segment)).subscribe((segment: string) => {
      this.selectedSegment = segment;
    });
    this.paramsSubscription = this.route.params.subscribe( (params: Params) => {
      const slug = 'slug';
      this.store.dispatch(new CategoryActions.StoreCategoryCarsStart(params[slug]));
    });
    this.subscription = this.store.select('categoryList')
        .pipe(map(categoryCarsState => categoryCarsState))
        .subscribe((categoryData) => {
          this.items = categoryData.categoryCars;
          this.isLoadingResults = categoryData.loading;
        });
    this.activeRoute = this.route.snapshot.data.stateName;
  }

  filteredList(): Car[] {
    if (this.selectedSegment) {
      return _.filter(this.items, {'className': this.selectedSegment});
    } else {
      return this.items;
    }
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
    this.subscription.unsubscribe();
  }

}
