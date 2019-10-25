import { Component, OnInit } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  openDialogSign(): void {
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '748px',
    });

  }

  ngOnInit() {
  }

}
