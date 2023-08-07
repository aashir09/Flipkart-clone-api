import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss']
})
export class ElectronicsComponent {


  public  electronic:any;


  constructor(private api:ApiService,private cartService:CartService){

  }

  ngOnInit(){
    this.api.electronics()
    .subscribe(res=>{
      this.electronic = res;
      this.electronic.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  }
  addtocart(item:any){
    this.cartService.addtoCart(item); 
  }


}


