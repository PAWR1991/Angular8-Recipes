import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 
        'This is simply Test', 
        'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20),
        ]
        ),
        new Recipe('An Another Recipe', 
        'This is simply Test', 
        'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Cheese', 1),
        ]
        )
      ];
      recipeSelected = new EventEmitter<Recipe>();

      /**
       * slice makes a new list than returning the pointer 
       */
      getRecipes(){
          return this.recipes.slice();
      }


}