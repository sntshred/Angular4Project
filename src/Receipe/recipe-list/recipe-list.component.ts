import { Component, OnInit } from '@angular/core';
import { Recipe } from "Receipe/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes:Recipe[]=[
  new Recipe('Chicken sandwich','From wendy shops','https://assets.culvers.com/menu-item-images/800/web-crispy-chicken-sandwich.jpg'),
  new Recipe('Chicken sandwich','From wendy shops','https://assets.culvers.com/menu-item-images/800/web-crispy-chicken-sandwich.jpg')
,  new Recipe('Chicken sandwich','From wendy shops','https://assets.culvers.com/menu-item-images/800/web-crispy-chicken-sandwich.jpg')
  
];
  constructor() { }

  ngOnInit() {
  }

}
