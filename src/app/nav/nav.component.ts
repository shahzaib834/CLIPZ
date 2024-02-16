import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  constructor(public modal: ModalService, public auth: AuthService) {}

  openModal(e: Event) {
    e.preventDefault();
    this.modal.openModal('auth');
  }
}
