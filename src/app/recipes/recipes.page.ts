import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      // tslint:disable-next-line: max-line-length
      imageUrl: 'https://i3-img.kabeleins.de/pis/ezone/b85cqgELB38wdEB0AB1fHPDQCtTDCJ4UYl_Ic-IXCoYylZ0mXbP3Z8_B4JBo6LCimhDa22AtrTM8DB_M9Sv4e9OM8slbXthgEbE4ubOs1rnC2jOcxZ9a-oZ09bK01Tt0b1vpGmsgVYDky7gxWa9Ji7hMq0kR_pQ2jRtK2fQmW4rytj1AFXX-l6q3zvzGC0WR4MrZm2eVebI8dVElyIxxoffiauzSGJCqKiLU64nsO3YYm77aW-CmLiBxue3Xb7cEvMfmUM1lzYjwCbSan5Q7lQCikI2SfI2G/profile:mag-996x562',
      ingredients: ['French Fries', 'Pork Meat', 'Salad'],
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://static.cuisineaz.com/610x610/i2142-spaghetti-a-la-sauce-tomate.jpg',
      ingredients: ['Spaguetti', 'Meat', 'Tomatoes'],
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
