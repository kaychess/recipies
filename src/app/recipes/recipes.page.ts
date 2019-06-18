import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Veg Biryani',
      imageUrl: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/hyderabadi-biryani.jpg',
      ingredients: ['rice', 'vegitables']
    },
    {
      id: 'r2',
      title: 'mutton Biryani',
      imageUrl: 'https://www.swatifood.com/wp-content/uploads/2018/01/Authentic-Hyderabadi-mutton-biryani-recipe.jpg',
      ingredients: ['rice', 'mutton']
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
