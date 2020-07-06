import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import {Car} from '../catalog/car.model';
import {HomeService} from './home.service';
import * as fromApp from './../store/app.reducer';
import { map } from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, OnDestroy {
  items: Car[] = [];
  subscription: Subscription;
  constructor( private homeService: HomeService, private store: Store<fromApp.AppState>) {

  }

  ngOnInit(): void {
    this.homeService.onLoad();
    this.subscription = this.store.select('homeList').pipe(map(carsState => carsState.cars)).subscribe((cars: Car[]) => {
      this.items = cars;
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
