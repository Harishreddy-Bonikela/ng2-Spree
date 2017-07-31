import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeModule } from './home/index';
import { StoreModule } from '@ngrx/store';
import { CartComponent } from './cart/cart.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { TaxonComponent } from './home/taxon/taxon.component';
import { ProductListComponent } from './home/product-list/product-list.component';
import { ProductListItemComponent } from './home/product-list/product-list-item/product-list-item.component';
import { OrdersComponent } from './user/orders/orders.component';
import { ReturnsComponent } from './user/returns/returns.component';
import { OrderListItemComponent } from './user/orders/orders-list-item/orders-list-item.component';
import { ReturnListItemComponent } from './user/returns/return-list-item/return-list-item.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { LineItemComponent } from './cart/line-item/line-item.component';
import { LineItemListComponent } from './cart/line-item-list/line-item-list.component';
import { OverviewComponent } from './user/overview/overview.component';

import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    UserComponent,
    ProductComponent,
    TaxonComponent,
    ProductListComponent,
    ProductListItemComponent,
    OrdersComponent,
    ReturnsComponent,
    OrderListItemComponent,
    ReturnListItemComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailComponent,
    CartComponent,
    LineItemComponent,
    LineItemListComponent,
    OverviewComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpModule,
    FormsModule,
    HomeModule,
    StoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
