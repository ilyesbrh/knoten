import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { CreateProjectComponent } from '../create-project/create-project.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(public dialog: MatDialog, public dataService: DataService) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '748px',
    });

  }
  


  ngOnInit() {
  }

}
