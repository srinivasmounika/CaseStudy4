import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDashboardRoutingModule } from './product-dashboard-routing.module';
import { ProductDashboardComponent } from './product-dashboard.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductDashboardComponent
  ],
  imports: [
    CommonModule,
    ProductDashboardRoutingModule,
    FormsModule
  ]
})
export class ProductDashboardModule { }
