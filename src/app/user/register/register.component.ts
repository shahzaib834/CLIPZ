import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service.service';
import { RegisterValidators } from '../validators/register-validators';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(public auth: AuthService, public modal: ModalService) {}

  registerForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.email]),
      age: new FormControl('', [
        Validators.required,
        Validators.min(18),
        Validators.max(120),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
        ),
      ]),
      confirm_password: new FormControl('', [Validators.required]),
      phone_number: new FormControl('', [
        Validators.required,
        Validators.minLength(12),
        Validators.maxLength(12),
      ]),
    },
    [RegisterValidators.match('password', 'confirm_password')]
  );

  showAlert: boolean = false;
  alertMsg: string = 'Please wait your account is being created!';
  alertColor: string = 'blue';

  submitForm() {
    if (this.registerForm.invalid) {
      return;
    }

    this.showAlert = true;
    this.alertMsg = 'Please wait your account is being created!';
    this.alertColor = 'blue';

    // Mocking Authentication.
    setTimeout(() => {
      this.auth.authenticateUser();
      this.modal.closeModal('auth');
    }, 1000);
  }
}
