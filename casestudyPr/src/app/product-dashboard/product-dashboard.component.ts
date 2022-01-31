import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {
  
  constructor(private talk:ProductService,private route:Router) { }

  ngOnInit(): void {
    console.log('product dash borad will activated')
  }


}
