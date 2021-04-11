import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ProductsComponent } from './products/products.component';
import { ProductlistComponent } from './productlist/productlist.component'
import { NewProductComponent } from './newproduct/newproduct.component';
import {LoginComponent} from './login/login.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import {UserloginComponent} from './userlogin/userlogin.component';
import {HomeComponent} from './home/home.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'productlist',
    component: ProductlistComponent
  },
  {
    path: 'userlogin',
    component: UserloginComponent
  },
  {
    path: 'userregister',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'add', 
    canActivate: [AuthGuard],
    component: NewProductComponent,
},
{
  path:'update',
  component:UpdateProductComponent
}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
