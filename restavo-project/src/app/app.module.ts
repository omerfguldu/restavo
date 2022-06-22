import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';

import { DininglistComponent } from './dining-list/dining-list.component';
import { FilterbarComponent } from './filterbar/filterbar.component';
import { MyreservationsComponent } from './myreservations/myreservations.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CategoriesComponent,
    DininglistComponent,
    FilterbarComponent,
    MyreservationsComponent
    
        
  ],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
