import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalOpen: boolean = false;
  private showLogin: boolean = false;
  constructor() { }

  toggleModal(): void {
    console.log('toggleModal() called');
    this.modalOpen = !this.modalOpen;
  }

  isModalOpen(): boolean {
    return this.modalOpen;
  }

  getShowLogin(): boolean {
    return this.showLogin;
  }

  setShowLogin(show: boolean): void {
    this.showLogin = show;
  }
}
