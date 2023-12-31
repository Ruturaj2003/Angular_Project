import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent {
  ingridients: Ingredient[] = [
    new Ingredient('Apple', 10),
    new Ingredient('Pineapple', 19),
  ];

  onIngredientAdded(event) {
    this.ingridients.push(event);
  }
}
