import { Component, OnInit } from '@angular/core';
import {Car} from '../catalog/car.model';
import {CatalogService} from '../catalog/catalog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  items: Car[] = [];
  constructor( private catalogService: CatalogService) { }

  ngOnInit(): void {
    this.getAllCars();
  }
  getAllCars() {
    this.catalogService.getAll().subscribe(
        data => {this.items = data; },
        err => console.log(err)
    );
  }
}
