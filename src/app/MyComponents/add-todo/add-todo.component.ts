import { Component, EventEmitter, Output } from '@angular/core';
import { ToDo } from '../../ToDo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  title!: string;
  desc!:string;
  @Output() todoAdd: EventEmitter<ToDo> = new EventEmitter();
  constructor(){
    
  }
  onSubmit(){
    const todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo);
  }
}
