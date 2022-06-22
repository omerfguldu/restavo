import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { DiningOutComponent } from './dining-out/dining-out.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';

const routes: Routes = [
  { path: 'restaurants', component: RestaurantListComponent },
  { path: 'details', component: RestaurantDetailsComponent },
  { path: '', component: CategoriesComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
