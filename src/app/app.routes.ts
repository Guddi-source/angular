import { Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

export const routes: Routes = [
    {
        path: 'toDoList',
        component: TodoListComponent
    },
    {
        path: 'reactiveForms',
        component: ReactiveFormComponent
    }
];
