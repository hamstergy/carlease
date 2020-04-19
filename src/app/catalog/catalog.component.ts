import { Component, OnInit } from '@angular/core';
import { Car } from './car.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.sass']
})
export class CatalogComponent implements OnInit {
  items: Car[] = [
    {
      make: 'Acura',
      model: 'MDX',
      price: 350
    },
    {
      make: 'Audi',
      model: 'a4',
      price: 420
    },
    {
      make: 'BMW',
      model: 'M5',
      price: 450
    },
    {
      make: 'Mercedes',
      model: 'M-class',
      price: 499
    },
    {
      make: 'Acura',
      model: 'MDX',
      price: 350
    },
    {
      make: 'Audi',
      model: 'a4',
      price: 420
    },
    {
      make: 'BMW',
      model: 'M5',
      price: 450
    },
    {
      make: 'Mercedes',
      model: 'M-class',
      price: 499
    },
    {
      make: 'Acura',
      model: 'MDX',
      price: 350
    },
    {
      make: 'Audi',
      model: 'a4',
      price: 420
    },
    {
      make: 'BMW',
      model: 'M5',
      price: 450
    },
    {
      make: 'Mercedes',
      model: 'M-class',
      price: 499
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
