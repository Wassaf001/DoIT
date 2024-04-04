import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './CustomComponents/pages/pages.component';
import { TodosComponent } from './CustomComponents/todos/todos.component';
import { AddTodoComponent } from './CustomComponents/add-todo/add-todo.component';
import { TodoItemComponent } from './CustomComponents/todo-item/todo-item.component';
import { OnepageComponent } from './CustomComponents/onepage/onepage.component';
import { LoginComponent } from './CustomComponents/login/login.component';
import { AddPageComponent } from './CustomComponents/add-page/add-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    TodosComponent,
    AddTodoComponent,
    TodoItemComponent,
    OnepageComponent,
    LoginComponent,
    AddPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
