import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { ILogin } from '../commponents/login/login.model';
import { IRegisterForm } from '../commponents/register-form/register.model';
import { InfoSnackabrService } from './info-snackabr.service';
import { UserService } from './user.service';
import { IUserData } from './userData.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private dbService: NgxIndexedDBService, private router: Router,
      private userService: UserService, private infoSnackbarService: InfoSnackabrService) { }

  tryLogin(loginData: ILogin) {
    this.dbService.getByIndex('users', 'login', loginData.login)
    .subscribe((user: any) => {
      if(user) {
        if (user.password === loginData.password) {
          const userData: IUserData = this.convertRegisterFormDataToUserData(user)
          this.userService.setUserData(userData)
          this.router.navigateByUrl('/user')
        } else {
          this.infoSnackbarService.openSnackBar('incorrect login or password');
        }
      } else {
        this.infoSnackbarService.openSnackBar('incorrect login or password');
      }
    })
  }

  private convertRegisterFormDataToUserData(user: IRegisterForm): IUserData{
    const userData: IUserData = {
      firstname: user.firstname,
      email: user.email,
      login: user.login
   }
   return userData
  }

}
