import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(public userService: UserService, public router: Router) {}
  canActivate(): boolean {
    if (!this.userService.getUserData()) {
      this.router.navigateByUrl('');
      return false;
    }
    return true;
  }

}
