import { Component, OnInit } from '@angular/core';
import { MatIconRegistry, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { CreateProjectComponent } from '../create-project/create-project.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    public dialog: MatDialog
  ) {
    this.matIconRegistry.addSvgIcon(
      'notification',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/notification.svg')
    );
  }

  createProject(): void {
    const dialogRef = this.dialog.open(CreateProjectComponent, {
      width: '748px',
    });

  }

  ngOnInit() {
  }

}
