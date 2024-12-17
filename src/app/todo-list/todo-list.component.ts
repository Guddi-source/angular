import { Component, ElementRef, ViewChild } from '@angular/core';
import { AppCommonModule } from '../app-common/app-common.module';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../todo.service';
import { CommonModule } from '@angular/common';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  
  @ViewChild('filter') filter!: ElementRef;
  addForm: boolean = false;
  toDoItem: string = '';

  constructor(public todoService: TodoService) {
  }

  add(): void {
    this.addForm = true;
  }

  list(): void {
    this.addForm = false;
  }

  submit(): void {
    this.todoService.addToDo(this.toDoItem);
    this.toDoItem = "";
    this.addForm = false;
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
  }

  changeCheckbox(_event: any, todo:Todo): void {
    const checked = _event.target.checked;
    this.todoService.updateCompleted(todo, checked);
  }

  onSelected() {
    // const selectedFilter = this.filter.nativeElement.value;
    // this.todoService.getFilterList(selectedFilter);
  }

}
