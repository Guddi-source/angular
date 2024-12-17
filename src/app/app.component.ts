import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ProductListComponent } from './parent-child/product-list/product-list.component';
import { ProductDetailsComponent } from './parent-child/product-details/product-details.component';
import { Observable } from 'rxjs';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HeaderComponent,
    CardComponent,
    TodoListComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular_clone';
  amount = 50;
  userForm: FormGroup | any;

  constructor(private _fb: FormBuilder) {

  }

  obserVa = new Observable<number>((sub) => {
    console.log("This is observable started");
    sub.next(Math.random());
    sub.complete();
  });



  ngOnInit(): void {
    this.userForm = this._fb.group({
      name: [''],
      skills: this._fb.array([this.createSkillsFormGroup()])
    });

    this.checkBalance();
    // console.log(res);

    this.obserVa.subscribe((val: number) => {
      console.log("sub 1",val);
    })
    this.obserVa.subscribe((val: number) => {
      console.log("sub 2",val);
    })
  }

  createSkillsFormGroup(): FormGroup {
    return this._fb.group({
      skill: [''],
    });
  }

  checkBalance(): any {
    const inner = () => {
      console.log(this.amount);
    };
    this.amount + 30;
    return inner();
  }

  public addSkills() {
    const skills = this.userForm.get('skills') as FormArray;
    skills.push(this.createSkillsFormGroup())
  }

  public deleteSkills(i: number) {
    const skills = this.userForm.get('skills') as FormArray;
    if (skills.length > 1) {
      skills.removeAt(i);
    } else {
      skills.reset();
    }
  }
}
