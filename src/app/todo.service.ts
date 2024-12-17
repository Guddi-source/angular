import { Injectable } from '@angular/core';
import { Todo } from './model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  todoList: Todo[] = [
    {
      id: 1,
      title: 'Todo One',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Todo Two',
      isCompleted: false,
    },
    {
      id: 3,
      title: 'Todo Three',
      isCompleted: false,
    }
  ];

  addToDo(todoTitle:string): void {
    let id = this.todoList.length + 2;

    const item: Todo = {
      id: id,
      isCompleted: false,
      title: todoTitle
    }
    this.todoList.unshift(item);
  }

  deleteTodo(item: any) {
    let index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
  }

  updateCompleted(todo: Todo, isChecked: boolean): void {
    const modifiedToDoList = this.todoList.map(obj => {
      if (obj.id == todo.id) {
          return { ...obj, isCompleted:  isChecked};
        }
        return obj;
    });
    this.todoList = modifiedToDoList;
  }

  getFilterList(getFilterKey: string): void {
    let filterResult = [];
    switch (getFilterKey) {
      case 'all':
        filterResult = this.todoList.filter((item) => {
          return (item.isCompleted == true || item.isCompleted == false);
        });
        break;

      case 'active':
        filterResult = this.todoList.filter((item) => {
          return item.isCompleted == false;
        });
        break;

      case 'completed':
        filterResult = this.todoList.filter((item) => {
          return item.isCompleted == true;
        });
        break;
    
      default:
        filterResult = this.todoList.filter((item) => {
          return (item.isCompleted == true || item.isCompleted == false);
        });
        break;
    }
    console.log(filterResult);
    this.todoList = filterResult;
   
  }
  
}
