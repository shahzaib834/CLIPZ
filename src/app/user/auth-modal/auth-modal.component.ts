import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css'],
})
export class AuthModalComponent implements OnInit, OnDestroy {
  constructor(public modal: ModalService) {}

  modalTitle: string = 'Your Account';
  isLoginForm: boolean = true;

  ngOnInit(): void {
    this.modal.register('auth');
  }

  openRegisterTab() {
    this.isLoginForm = false;
  }

  openLoginTab() {
    this.isLoginForm = true;
  }

  ngOnDestroy(): void {
    this.modal.unregister('auth');
  }
}
