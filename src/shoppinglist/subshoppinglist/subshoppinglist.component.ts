import {Component} from "@angular/core";
import { ingredient } from "app/Shared/ingrident.model";
@Component({
selector:"app-subshoppinglist",
templateUrl:"subshoppinglist.component.html"
})

export class subshoppinglist{
ingridets:ingredient[]=[
    new ingredient("Apples",4),
    new ingredient("Tomatoes",4),
    new ingredient("Rice",4)
    
];



}