import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  isFeatured: boolean;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent {

  products: Product[] = [
    { id: 1, name: 'Laptop', price: 1500, isFeatured: false },
    { id: 2, name: 'Phone', price: 800, isFeatured: false }
  ];
    
  addProduct() {
  
  }

}
