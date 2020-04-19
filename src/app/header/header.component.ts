import { Component, OnInit } from '@angular/core';

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
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})

export class HeaderComponent implements OnInit {
  makes: Make[] = [
    {name: 'Toyota'},
    {name: 'Honda'},
    {name: 'Ford'},
    {name: 'Nissan'},
    {name: 'Chevrolet'},
    {name: 'Mercedes'},
    {name: 'BMW'},
    {name: 'Hyundai'},
    {name: 'Kia'},
    {name: 'Lexus'},
    {name: 'Subaru'},
    {name: 'Jeep'},
    {name: 'Mazda'},
    {name: 'Volkswagen'},
    {name: 'Audi'},
    {name: 'Dodge'}
  ];
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
      slug: 'track',
      url: 'track'
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

  constructor() { }

  ngOnInit(): void {
  }

}

