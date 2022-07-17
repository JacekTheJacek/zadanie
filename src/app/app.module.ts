import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './commponents/register-form/register-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './commponents/login/login.component';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserComponent } from './commponents/user/user.component';
import { AuthguardService } from './services/authguard.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';



const dbConfig: DBConfig  = {
  name: 'UsersDb',
  version: 1,
  objectStoresMeta: [{
    store: 'users',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'firsrname', keypath: 'firsrname', options: { unique: false } },
      { name: 'lastname', keypath: 'lastname', options: { unique: false } },
      { name: 'login', keypath: 'login', options: { unique: true } },
      { name: 'email', keypath: 'email', options: { unique: true } },
      { name: 'password', keypath: 'password', options: { unique: false } },
    ]
  }]
};


@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    LoginComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    NgxIndexedDBModule.forRoot(dbConfig),
    MatButtonModule,
    FlexLayoutModule,
    MatSnackBarModule
  ],
  providers: [AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
