import { Recipe } from "./../recipe.model";
import { Component } from "@angular/core";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrl: "./recipe-list.component.scss",
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      "First Recipe",
      "This is the first recipe",
      "https://www.foodandwine.com/thmb/tAS-x_IC4ss1cb9EdDpsr0UExdM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bucatini-with-mushroom-ragu-dandelion-greens-and-tarragon-FT-RECIPE0421-3a5f0d29f7264f5e9952d4a3a51f5f58.jpg"
    ),
    new Recipe(
      "Second Recipe",
      "This is the second recipe",
      "https://www.hindustantimes.com/ht-img/img/2023/08/23/1600x900/n8_1_1664869675170_1692773772473.jpg"
    ),
    new Recipe(
      "Third Recipe",
      "This is the third recipe",
      "https://www.fabhotels.com/blog/wp-content/uploads/2022/07/1400x600-Food-Banner.jpg"
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
