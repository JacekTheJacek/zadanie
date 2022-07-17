import { Injectable } from '@angular/core';
import { IUserData } from './userData.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userData: IUserData | null = null;

  constructor() { }

  setUserData(userData: IUserData){
    this.userData = userData;
  }

  getUserData(): IUserData | null {
    return this.userData;
  }
}
