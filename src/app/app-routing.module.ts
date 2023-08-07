import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './component/product/product.component';
import { CartComponent } from './component/cart/cart.component';
import { ElectronicsComponent } from './component/electronics/electronics.component';
import { FashionComponent } from './component/fashion/fashion.component';
import { JewlleryComponent } from './component/jewllery/jewllery.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
{path:'',redirectTo:'products',pathMatch:'full'},
{path:'products',component:ProductComponent},
{path:'cart',component:CartComponent},
{path:'electronics',component:ElectronicsComponent},
{path:'fashion',component:FashionComponent},
{path:'jewllery',component:JewlleryComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent}






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
