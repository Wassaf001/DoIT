import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './src/app/app.component';

import { AddTodoComponent } from "./src/app/MyComponents/add-todo/add-todo.component";
import { TodoItemComponent } from "./src/app/MyComponents/todo-item/todo-item.component";
import { TodosComponent } from "./src/app/MyComponents/todos/todos.component";
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations:[
        AppComponent,
        TodosComponent,
        TodoItemComponent,
        AddTodoComponent,
    ],
    imports:[
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule{}