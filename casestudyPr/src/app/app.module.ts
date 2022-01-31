import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductDashboardModule } from './product-dashboard/product-dashboard.module';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductDashboardModule,
    UserDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
