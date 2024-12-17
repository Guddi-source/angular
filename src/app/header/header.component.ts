import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  count$: Observable<any>;
  constructor(private store: Store<{ cartCount: number }>) {
    this.count$ = this.store.pipe(select("cartCount"));
  }
}
