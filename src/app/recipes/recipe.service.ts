import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
export class RecipeService{ 
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
          'Egg salad',
          'Egg salad with avacado, fig',
          'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80'
        ),
        new Recipe(
          'Cilantro kiwi smoothie',
          'Cilantro, kiwi, mint and some of your favourite herbs smoothied',
          'https://images.unsplash.com/photo-1528498033373-3c6c08e93d79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80'
        ),
      ];
    
    getRecipes(){ 
        return this.recipes.slice();
    }
}