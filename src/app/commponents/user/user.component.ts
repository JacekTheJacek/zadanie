import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { IUserData } from 'src/app/services/userData.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userData?: IUserData;

  constructor(private userService: UserService ) {}

  ngOnInit(): void {
    this.userData = this.userService.getUserData()!;
    console.log(this.userData);
  }

}
