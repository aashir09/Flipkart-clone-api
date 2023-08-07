import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-jewllery',
  templateUrl: './jewllery.component.html',
  styleUrls: ['./jewllery.component.scss']
})
export class JewlleryComponent {

  public  jewllery:any;

  constructor(private api:ApiService,private cartService:CartService){

  }

  ngOnInit(){
    this.api.electronics()
    .subscribe(res=>{
      this.jewllery = res;
      this.jewllery.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  }
  addtocart(item:any){
    this.cartService.addtoCart(item); 
  }


}
