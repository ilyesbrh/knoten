import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CreateProjectComponent } from '../create-project/create-project.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  participate = [];
  creator = [];
  constructor(private dataService: DataService, private dialog: MatDialog) {
  }
  async ngOnInit() {
    this.participate = await this.dataService.getProjects('p') as any;
    this.creator = await this.dataService.getProjects('c') as any;
    console.log('[P]');
    console.log(this.participate);
    console.log('[C]');
    console.log(this.creator);
  }

  createProject(): void {
    const dialogRef = this.dialog.open(CreateProjectComponent, {
      width: '748px',
    });

  }

}
