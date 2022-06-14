import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Proyecto } from '../proyecto';
@Component({
  selector: 'app-edit-proyect',
  templateUrl: './edit-proyect.component.html',
  styleUrls: ['./edit-proyect.component.css']
})
export class EditProyectComponent implements OnInit {

  lista:string[]=["Cabaña","Cupula","Container"];

  constructor(
    public dialogRef: MatDialogRef<EditProyectComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: Proyecto) {}

  ngOnInit() {
  }

  cancelar() {
    this.dialogRef.close();
  }


}
