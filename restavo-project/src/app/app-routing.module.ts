import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { MyreservationsComponent } from './myreservations/myreservations.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
  { path: 'restaurants', component: RestaurantListComponent },
  { path: 'details', component: RestaurantDetailsComponent },
  { path: 'reservations', component: MyreservationsComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'results', component: SearchResultsComponent },
  { path: '', component: CategoriesComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
