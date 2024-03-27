import { Component } from '@angular/core';
import { ToDo } from '../../ToDo';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos: ToDo[] = [];
  localItem: string;
  constructor() {
    this.localItem = localStorage.getItem("todos");
    if(this.localItem==null){
      this.todos = [];
    }
    else{
      this.todos = JSON.parse(this.localItem);
    } 
  }
  deleteTodo(todo:ToDo){
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addTodo(todo:ToDo){
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
