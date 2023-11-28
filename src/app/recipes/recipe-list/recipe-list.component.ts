import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  samp =
    'https://imgs.search.brave.com/484rbVGrzOSKVTk2N8LqU-XPvJD8oTHW6PN1QVQidDs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NDAxODk1NDkzMzYt/ZTZlOTljMzY3OWZl/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4bGVI/QnNiM0psTFdabFpX/UjhOWHg4ZkdWdWZE/QjhmSHg4ZkE9PQ.jpeg';
  recipes: Recipe[] = [
    new Recipe('Dota', 'dotex Res', this.samp),
    new Recipe('Dota', 'dotex Res', 'this is dummy'),
  ];
}
