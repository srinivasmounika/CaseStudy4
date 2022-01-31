import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { ProductService } from '../product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
}
