import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable } from 'rxjs';
import { IRegisterForm } from '../commponents/register-form/register.model';
import { InfoSnackabrService } from './info-snackabr.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private dbService: NgxIndexedDBService, private router: Router, private infoSnackbarService: InfoSnackabrService) { }


  tryRegisterUser(registerData: IRegisterForm) {
    try{
      this.registerUser(registerData).subscribe(() => {
        this.router.navigateByUrl('');
      });
    } catch (err) {
      this.infoSnackbarService.openSnackBar('incorrect register data');
    }
  }

  private registerUser(registerData: IRegisterForm): Observable<any> {
    return this.dbService.add('users', {
      firstname: registerData.firstname,
      lastName: registerData.lastname,
      email: registerData.email,
      login: registerData.login,
      password: registerData.password
    });
  }
}
