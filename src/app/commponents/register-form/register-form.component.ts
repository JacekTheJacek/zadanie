import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InfoSnackabrService } from 'src/app/services/info-snackabr.service';
import { RegisterService } from 'src/app/services/register.service';
import { IRegisterForm } from './register.model';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private fb: FormBuilder, private registerService: RegisterService, private infoSnackbarService: InfoSnackabrService,
      private router: Router) {
    this.registerForm = fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      login: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])]
    })
  }

  ngOnInit(): void {
  }

  tryRegisterUser() {
    const registerData: IRegisterForm = this.getFormValueAsIRegisterForm;
    this.registerService.tryRegisterUser(registerData)
  }

  private get getFormValueAsIRegisterForm(): IRegisterForm{
    return this.registerForm.value as IRegisterForm;
  }

}
