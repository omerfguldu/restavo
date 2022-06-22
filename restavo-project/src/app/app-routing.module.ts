import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { DininglistComponent } from './dining-list/dining-list.component';





const routes: Routes = [
  { path: 'dininglist', component:DininglistComponent },
  { path: '', component: CategoriesComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
