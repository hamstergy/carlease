import { Component, OnInit } from '@angular/core';
import {CatalogService} from '../catalog/catalog.service';
import {Store} from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import {StoreFilterSegment} from './store/header.actions';
import {map} from 'rxjs/operators';

interface Price {
  text: string;
  url: string;
}
interface Segment {
  name: string;
  slug: string;
  url: string;
}
interface Make {
  name: string;
  slug: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})

export class HeaderComponent implements OnInit {
  showMakeMenu = false;
  makes: Make[] = [];
  selectedSegment = '';
  prices: Price[] = [
      {
        text: '< $10K',
        url: '10000'
      },
      {
        text: '$10K - $20K',
        url: '20000'
      },
      {
        text: '$20K - $30K',
        url: '30000'
      },
      {
        text: '$30K - $50K',
        url: '50000'
      },
      {
        text: '$50K - $70K',
        url: '70000'
      },
      {
        text: '> $70K',
        url: '80000'
      },
    ];
  segments: Segment[] = [
    {
      name: 'Sedan',
      slug: 'sedan',
      url: 'sedan'
    },
    {
      name: 'SUV',
      slug: 'suv',
      url: 'suv'
    },
    {
      name: 'Crossover',
      slug: 'crossover',
      url: 'crossover'
    },
    {
      name: 'Truck',
      slug: 'truck',
      url: 'truck'
    },
    {
      name: 'Coupe',
      slug: 'coupe',
      url: 'coupe'
    },
    {
      name: 'Convertible',
      slug: 'convertible',
      url: 'convertible'
    },
    {
      name: 'Hatchback',
      slug: 'hatchback',
      url: 'hatchback'
    },
    {
      name: 'Van',
      slug: 'van',
      url: 'van'
    },
    {
      name: 'Wagon',
      slug: 'wagon',
      url: 'wagon'
    },
  ];

  constructor( private catalogService: CatalogService, private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.catalogService.getMakes().subscribe(
        data => { this.makes = data; },
        err => console.log(err)
    );
    this.store.select('headerList').pipe(map(headerState => headerState.segment)).subscribe( (segment: string) => {
      this.selectedSegment = segment;
    });
  }

  setSegment(segment: string) {
    this.selectedSegment === segment
        ? this.store.dispatch(new StoreFilterSegment(null))
        : this.store.dispatch(new StoreFilterSegment(segment));
  }

  toggleSearch() {
    console.log('test');
  }

  setClassNameHeader(className) {
    this.catalogService.setClassName(className);
  }
}

