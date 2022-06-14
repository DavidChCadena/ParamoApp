import { Component, OnInit } from '@angular/core';
import { HistorialProyecto } from '../historial-proyecto';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-historial-proyect',
  templateUrl: './historial-proyect.component.html',
  styleUrls: ['./historial-proyect.component.css']
})

export class HistorialProyectComponent implements OnInit {
  API = "http://localhost:3000/ProyectsHistory";
  columnas: string[] = ['Codigo', 'Nombre', 'Proyecto' , 'Fecha', 'EstadoInicial', 'EstadoFinal' ];
  actual:string="";
  datos: HistorialProyecto []=[];

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.fillProyects();
    console.log(this.datos);
  }

  fillProyects () {
    this.http.get<HistorialProyecto[]>(this.API).subscribe( (data : HistorialProyecto[]) => {
    this.datos = data;
  }
  );
}
}
