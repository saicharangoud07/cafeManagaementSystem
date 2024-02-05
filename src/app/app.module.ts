import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { CoffeeComponent } from './coffee/coffee.component';
import { DessertsComponent } from './desserts/desserts.component';
import { MocktailsComponent } from './mocktails/mocktails.component';
import { SnacksComponent } from './snacks/snacks.component';
import { FoodComponent } from './food/food.component';
import { FooterComponent } from './footer/footer.component';
import { Home1Component } from './home1/home1.component';
import { BuyitemComponent } from './buyitem/buyitem.component';
import { CartService } from './cart.service';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './menu/menu.component';
import { Home2Component } from './home2/home2.component';
import { OrdersComponent } from './orders/orders.component';
import { CartComponent } from './cart/cart.component';
import { BillComponent } from './bill/bill.component';
import { OrderreceiptComponent } from './orderreceipt/orderreceipt.component';
import { ForgotComponent } from './forgot/forgot.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    AppComponent,
    CoffeeComponent,
    DessertsComponent,
    MocktailsComponent,
    SnacksComponent,
    FoodComponent,
    FooterComponent,
    Home1Component,
    BuyitemComponent,
    AdminComponent,
    MenuComponent,
    Home2Component,
    OrdersComponent,
    CartComponent,
    BillComponent,
    OrderreceiptComponent,
    ForgotComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    MatSnackBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    provideClientHydration(),
    CartService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
