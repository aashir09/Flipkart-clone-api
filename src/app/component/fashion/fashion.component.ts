import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.scss']
})
export class FashionComponent {

  public  fashion:any;

  constructor(private api:ApiService,private cartService:CartService){

  }

  ngOnInit(){
    this.api.jewllery()
    .subscribe(res=>{
      this.fashion = res;
      this.fashion.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  }
  addtocart(item:any){
    this.cartService.addtoCart(item); 
  }


}
