import { Component, Output, EventEmitter } from '@angular/core';
import {ModalService} from '../../modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() submit = new EventEmitter<{ email: string, password: string }>();
  @Output() close = new EventEmitter<void>();
  constructor(public modalService: ModalService) {}
  
  formData: { email: string, password: string } = { email: '', password: '' };
  loginMode: boolean = false;

  submitForm() {
    this.submit.emit(this.formData);
    this.closeModal(); 
  }

  closeModal() {
    this.modalService.setShowLogin(false);
  }

  toggleMode() {
    this.loginMode = !this.loginMode;
  }
}


