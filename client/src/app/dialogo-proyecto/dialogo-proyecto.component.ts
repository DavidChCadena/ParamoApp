import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Proyecto } from '../proyecto';
@Component({
  selector: 'app-dialogoarticulo',
  templateUrl: './dialogo-proyecto.component.html',
  styleUrls: ['./dialogo-proyecto.component.css']
})
export class DialogoarticuloComponent implements OnInit {

  lista:string[]=["En espera","En estudio","Aceptado","En construcción", "Finalizado"];

  constructor(
    public dialogRef: MatDialogRef<DialogoarticuloComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: Proyecto) {}

  ngOnInit() {
  }

  cancelar() {
    this.dialogRef.close();
  }

}