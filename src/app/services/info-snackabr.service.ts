import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class InfoSnackabrService {

  constructor(private snackBar: MatSnackBar) { }

  public openSnackBar(msg: string, action: string = 'X'){
    this.snackBar.open(msg, action, {
      duration: 5000,
    });
  }

}
