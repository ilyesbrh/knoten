import { Component, OnInit } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public dialog: MatDialog, private dialogRef: MatDialogRef<LoginComponent>) { }
  openDialogSign(): void {
    const d = this.dialog.open(SignupComponent, {
      width: '748px',
    });
    d.afterClosed().subscribe(v => this.dialogRef.close());

  }

  ngOnInit() {
  }

}
