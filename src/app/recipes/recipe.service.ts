import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Egg salad',
      'Egg salad with avacado, fig',
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80',
      [new Ingredient('Avacado', 2), new Ingredient('Eggs', 2), new Ingredient('Fig', 1)]
    ),
    new Recipe(
      'Cilantro kiwi smoothie',
      'Cilantro, kiwi, mint and some of your favourite herbs smoothied',
      'https://images.unsplash.com/photo-1528498033373-3c6c08e93d79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80',
      [new Ingredient('Cilantro', 2), new Ingredient('Kiwi', 3), new Ingredient('Mint', 1), new Ingredient('Herbs', 1)]
    ),
    new Recipe(
      'Fried egg',
      'Perfectly fried egg placed on wonderfully roasted golden bread, seasoned just right',
      'https://images.unsplash.com/photo-1562918005-50afb98e5d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      [new Ingredient('Egg', 2), new Ingredient('Pepper', 2), new Ingredient('Salt', 1), new Ingredient('Cilantro', 3), new Ingredient('Bread', 2)]
    )
  ];

  constructor(private slService: ShoppingListService) { }
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}