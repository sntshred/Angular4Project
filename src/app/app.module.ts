import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderCompnent } from "Header/header.component";
import { RecipeListComponent } from "Receipe/recipe-list/recipe-list.component";
import { RecipeDetailsComponent } from "Receipe/recipe-details/recipe-details.component";
import { RecipeItemComponent } from "Receipe/recipe-item/recipe-item.component";
import { receipe } from "Receipe/ReceipeBook/ReceipeBook";
import { shoppinglistEdit } from "shoppinglist/subshoppinglistEdit/subshoppinglistEdit.component";
import { subshoppinglist } from "shoppinglist/subshoppinglist/subshoppinglist.component";

@NgModule({
  declarations: [
    AppComponent,
    receipe,
    HeaderCompnent,
    subshoppinglist,
    shoppinglistEdit,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
