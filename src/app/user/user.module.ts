import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

// NOTES
// 1- ngx-mask is used for masking the input. e.g. masking phone format is specific format.

@NgModule({
  declarations: [AuthModalComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [provideNgxMask()],
  exports: [AuthModalComponent],
})
export class UserModule {}
