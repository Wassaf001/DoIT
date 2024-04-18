import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  sno: number;
  date: string; 
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  @Input() sno!: number; 
  newTodo: Partial<Todo> = { title: '', description: '', completed: false, sno: 0, date: '' };
  startDate: string = '';
  endDate: string = '';

  editingTodo: Todo | null = null; 

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchTodos();
  }

  fetchTodos() {
    let url = `http://localhost:5000/api/todos?sno=${this.sno}`;
    if (this.startDate && this.endDate) {
      url += `&startDate=${this.startDate}&endDate=${this.endDate}`;
    }
    this.http.get<Todo[]>(url).subscribe(todos => {
      this.todos = todos;
    }, error => {
      console.error('Error fetching todos:', error);
    });
  }

  addTodo() {
    if (this.newTodo && this.newTodo.title && this.newTodo.title.trim() !== '') {
      this.newTodo.sno = this.sno; 
      this.http.post<any>('http://localhost:5000/api/todos', this.newTodo).subscribe(response => {
        this.fetchTodos();
        this.newTodo = { title: '', description: '', completed: false, sno: this.sno, date: '' }; 
      }, error => {
        console.error('Error creating todo:', error);
      });
    }
  }
  
  removeTodo(id: number) {
    this.http.delete(`http://localhost:5000/api/todos/${id}`).subscribe(() => {
      this.fetchTodos();
    }, error => {
      console.error('Error deleting todo:', error);
    });
  }

  applyDateFilter() {
    this.fetchTodos(); 
  }

  get filteredTodos(): Todo[] {
    // Apply date filtering
    return this.todos.filter(todo => {
      if (this.startDate && this.endDate) {
        return todo.date >= this.startDate && todo.date <= this.endDate;
      }
      return true; 
    });
  }

  editTodo(todo: Todo) {
    this.editingTodo = todo ? { ...todo } : null;
  }
  

  saveEdit(todo: Todo) {
    this.http.put(`http://localhost:5000/api/todos/${todo.id}`, todo).subscribe(() => {
      const index = this.todos.findIndex(t => t.id === todo.id);
      if (index !== -1) {
        this.todos[index] = { ...todo };
      }
      this.cancelEdit();
    }, error => {
      console.error('Error saving todo:', error);
    });
  }

  cancelEdit() {
    this.editingTodo = null;
  }
}
