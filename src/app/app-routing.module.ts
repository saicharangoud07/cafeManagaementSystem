
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { SnacksComponent } from './snacks/snacks.component';
import { FoodComponent } from './food/food.component';
import { DessertsComponent } from './desserts/desserts.component';
import { MocktailsComponent } from './mocktails/mocktails.component';
import { FooterComponent } from './footer/footer.component';
import { Home1Component } from './home1/home1.component';
import { BuyitemComponent } from './buyitem/buyitem.component';
import { MenuComponent } from './menu/menu.component';
import { AdminComponent } from './admin/admin.component';
import { Home2Component } from './home2/home2.component';
import { OrdersComponent } from './orders/orders.component';
import { CartComponent } from './cart/cart.component';
import { BillComponent } from './bill/bill.component';
import { OrderreceiptComponent } from './orderreceipt/orderreceipt.component';
import { ForgotComponent } from './forgot/forgot.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'register',component:RegisterComponent},
  {path:'header',component:HeaderComponent},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  {path:'coffee',component:CoffeeComponent},
  {path:'snacks',component:SnacksComponent},
  {path:'food',component:FoodComponent},
  {path:'desserts',component:DessertsComponent},
  {path:'mocktails',component:MocktailsComponent},
  {path:'footer',component:FooterComponent},
  {path:'home1',component:Home1Component},
  {path:'buyitem',component:BuyitemComponent},
  {path:'menu',component:MenuComponent},
  {path:'home2',component:Home2Component},
  {path:'orders',component:OrdersComponent},
  {path:'cart',component:CartComponent},
  {path:'admin',component:AdminComponent},
  { path: 'bill', component: BillComponent },
  {path:'orderreceipt', component: OrderreceiptComponent},
  {path:'forgot',component: ForgotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
