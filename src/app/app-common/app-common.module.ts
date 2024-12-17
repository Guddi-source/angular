import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from '../store/cart.reducers';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forRoot({cartCount: cartReducer})
  ],
  exports: [
    CommonModule,
    FormsModule
  ]
})
export class AppCommonModule { }
