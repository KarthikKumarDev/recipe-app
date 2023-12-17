import { Recipe } from './../../recipe.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.scss'
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;

  isDetailMode = false;

  onDetailModeToggle() {
    this.isDetailMode = !this.isDetailMode;
  }

}
