import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { DiningOutComponent } from './dining-out/dining-out.component';

const routes : Routes = [
  
  {path : "dining", component: DiningOutComponent },
  {path: "",component: CategoriesComponent,pathMatch:"full"}
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
