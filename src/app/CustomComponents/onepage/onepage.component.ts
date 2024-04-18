import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onepage',
  templateUrl: './onepage.component.html',
  styleUrls: ['./onepage.component.css']
})
export class OnepageComponent {
  @Input() page: { title: string, content: string } = { title: '', content: '' };
  completed: boolean = false;
  constructor(private router: Router) {} 

  navigateToDo() {
    this.router.navigate(['/todos']);
    console.log('Navigating to todos');
  }
  complete(){
    console.log('Completed');
    this.completed = true;
  }
}
