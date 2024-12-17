import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import { CommonModule } from '@angular/common';
import { select, Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, Observable, Subject } from 'rxjs';
import { addToCart, removeFromCart } from '../store/cart.actions';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule,
    MatBadgeModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  public people$: Subject<any> = new Subject();
  private searchDecouncer$: Subject<string> = new Subject();

  searchData: string ="";

  products = [
    {
      name: "Eye Liner",
      image: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
    },
    {
      name: "Compact",
      image: "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png"
    },
    {
      name: "kajal",
      image: "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png"
    },
  ];
  searchText: string = "";
  // count$: Observable<number>;
  
  constructor(private store: Store<{ cartCount: number }>) {
    // this.count$ = store.pipe(select('cartCount'));
  }

  ngOnInit(): void {
    this.setSearchDebounce();
  }

  addToCart() {
    this.store.dispatch(addToCart())
  }
  removeFromCart() {
    this.store.dispatch(removeFromCart())
  }

  // ******************* Debounce ********************
  onSearchInputChange(searchText: any): any {
    // console.log(this.searchData);
    // this.searchText = searchText;
    this.searchDecouncer$.next(searchText);
  }

  setSearchDebounce(): void {
    this.searchDecouncer$.pipe(
      debounceTime(2000),
      distinctUntilChanged(),
    ).subscribe((res)=>{
      console.log("search api can be called here !");
      const result = this.products.filter((element) => {
        return element.name.toLowerCase() == this.searchData.toLowerCase();
      });
      this.products = result;
    });
  }
}
