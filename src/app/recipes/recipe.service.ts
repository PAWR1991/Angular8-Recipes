import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 
        'This is simply Test', 
        'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'
        ),
        new Recipe('An Another Recipe', 
        'This is simply Test', 
        'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'
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