import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent {
  @Output() addPage = new EventEmitter<{ sno: number, title: string, content: string, completed: boolean }>(); 
  @Output() closeModal = new EventEmitter<void>();
  formData: { title: string, content: string } = { title: '', content: '' };
  sno: number = 0;
  completed: boolean = false;

  submitForm() {
    console.log('Form submitted:', this.formData);
    this.addPage.emit({
      sno: this.sno,
      title: this.formData.title, 
      content: this.formData.content,
      completed: this.completed
    }); 
    this.sno++;
    this.formData = { title: '', content: '' }; 
  }
  
  close() {
    this.closeModal.emit(); 
  }
}
