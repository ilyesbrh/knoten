import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  metaData = {
    email: '',
    password: '',
    first: '',
    last: '',
    fields: '',
    about: ''
  };

  constructor(public dataService: DataService, private dialogRef: MatDialogRef<SignupComponent>) { }

  ngOnInit() {
  }

  signUp() {
    this.dataService.signup(this.metaData);
    this.dialogRef.close();
  }

}
