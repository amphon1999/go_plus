import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShopComponent } from './components/shop/shop.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingPaymentComponent } from './components/shopping-payment/shopping-payment.component';
import { SearchShopComponent } from './components/shop/components/search-shop/search-shop.component';
import { ProductsShopComponent } from './components/shop/components/products-shop/products-shop.component';
import { CarouselShopComponent } from './components/shop/components/carousel-shop/carousel-shop.component';
import { PaginationShopComponent } from './components/shop/components/pagination-shop/pagination-shop.component';
import { ShareService } from 'src/app/services/share.service';
import { ShopTableComponent } from './components/shop-table/shop-table.component';
import { ShopFrontComponent } from './components/shop-front/shop-front.component';
import { ShopTableApiComponent } from './components/shop-table-api/shop-table-api.component';
import { ShoppingCartV1Component } from './components/shopping-cart-v1/shopping-cart-v1.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ApiService } from 'src/app/services/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ShopComponent,


    ShoppingCartComponent,
    ShoppingPaymentComponent,
    SearchShopComponent,
    ProductsShopComponent,
    CarouselShopComponent,
    PaginationShopComponent,
    ShopTableComponent,
    ShopFrontComponent,
    ShopTableApiComponent,
    ShoppingCartV1Component,
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShoppingRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    
  ],
  providers: [ShareService],
  exports: [
    ShopComponent,
    ShoppingCartComponent,
    ShoppingPaymentComponent,
    ShopTableComponent,
    ShopFrontComponent,
    ShopTableApiComponent,
    ShoppingCartV1Component,
   
  ]
})
export class ShoppingModule { }
