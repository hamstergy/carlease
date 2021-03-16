import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

import * as fromApp from '../../store/app.reducer';
import * as CategoryActions from '../category/store/category.actions';
import { Car } from '../car.model';
import * as ModelActions from './store/model.actions';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.sass']
})
export class ModelComponent implements OnInit, OnDestroy {
  isLoadingResults = true;
  paramsSubscription: Subscription;
  subscription: Subscription;
  item: Car = null;
  make = 'Toyota';

  constructor(private route: ActivatedRoute, private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe( (params: Params) => {
      const keyMakeSlug = 'makeSlug';
      const keyModelSlug = 'modelSlug';
      this.store.dispatch(new ModelActions.StoreCarModelStart({make: params[keyMakeSlug], model: params[keyModelSlug]}));
    });
    this.subscription = this.store.select('modelList')
        .pipe(map(modelCarsState => modelCarsState))
        .subscribe((modelData) => {
          this.item = modelData.model;
          this.make = modelData.make;
          this.isLoadingResults = modelData.loading;
          console.log(this.item);
        });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
    this.subscription.unsubscribe();
  }
}
