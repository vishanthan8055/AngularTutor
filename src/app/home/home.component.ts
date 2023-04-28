import { Component } from '@angular/core';
import { HomeService } from '../services/home.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  names:any;
  comp:any;
  selected = "Electronics";
  constructor(hs:HomeService,cs:ProductService){
    hs.getProducts().subscribe(
      {
        next:(data:any) => this.names = data,
        error:()=>this.names = []
      }
    )
    cs.getpro().subscribe(
      {
        next:(data:any) => this.comp = data,
        error:()=>this.comp=[]
      }
    )
  }
}
