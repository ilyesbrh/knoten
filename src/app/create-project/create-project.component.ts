import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

  metadata = {
    title: '',
    description: '',
    fields: '',
    members: '',
    creator: localStorage.getItem('id')
  }
  constructor(private dataS: DataService, private dialogRef: MatDialogRef<CreateProjectComponent>) { }

  ngOnInit() {
  }

  onSend() {
    this.dataS.createProject(this.metadata);
    this.dialogRef.close(this.metadata);
  }

}
