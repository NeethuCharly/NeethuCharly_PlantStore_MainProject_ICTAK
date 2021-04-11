import { Component } from '@angular/core';
import { ProductService } from '../productservice.service';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'pm-productlist',
  templateUrl:'./productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  products=[{
    productId :'',
    productName:'',
    productCode:'',
    description:'',
    price:'',
    imageUrl:''}]
  
  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  constructor(private router:Router,private productService: ProductService,public _auth:AuthService){ }
  ngOnInit(): void{
    this.productService.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
  })
  }
  
}
  