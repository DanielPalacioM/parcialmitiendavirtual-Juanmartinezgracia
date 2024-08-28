import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductdetailPageRoutingModule } from './productdetails-routing.module';

import { ProductDetailPage } from './productdetails.page';
 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductdetailPageRoutingModule,
    CurrencyPipe
  ],
  declarations: [ProductDetailPage]
})
export class ProductDetailPageModule {}
