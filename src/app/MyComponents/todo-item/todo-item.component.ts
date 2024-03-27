import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { ToDo } from '../../ToDo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent{
  @Input() todo!: ToDo;
  @Output() todoDelete: EventEmitter<ToDo> = new EventEmitter();
  constructor(){
    
  }
  onClick(todo: ToDo){
    this.todoDelete.emit(todo);
    console.log("onClick has been triggered")
  }
}
