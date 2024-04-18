import { Component } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'DoIt';
  constructor(private modalService: ModalService) {}
  
  openModal() {
    this.modalService.toggleModal();
  }
  openLogin() {
    this.modalService.setShowLogin(true);
  }

  closeLogin() {
    this.modalService.setShowLogin(false);
  }
  
  isLoginModalOpen(): boolean {
    return this.modalService.getShowLogin();
  }
}
