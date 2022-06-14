import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogoarticuloComponent } from '../dialogo-proyecto/dialogo-proyecto.component';
import { EditProyectComponent } from '../edit-proyect/edit-proyect.component';
import { Proyecto } from '../proyecto';

import { HttpClient } from '@angular/common/http';

 
@Component({
  selector: 'app-root',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})

export class AdminPageComponent implements OnInit{
  API = "http://localhost:3000/Proyects";
  columnas: string[] = ['Codigo', 'Nombre', 'Apellido' , 'Proyecto', 'Telefono', 'Correo', 'Estado', 'Acciones' ];
  actual:string="";
  datos: Proyecto []=[];

  @ViewChild(MatTable) tabla1!: MatTable<Proyecto>;
 
  constructor(public dialog: MatDialog , public http: HttpClient , public dialogEdit:MatDialog) { }

  ngOnInit() {
    this.fillProyects();
  }
  
   fillProyects () {
      this.http.get<Proyecto[]>(this.API).subscribe( (data : Proyecto[]) => {
      this.datos = data;
    }
    );
  }

  editProyect(proyecto:Proyecto , codigo : number){
    this.datos[codigo] = proyecto;
    const body = { name: proyecto.nombre_usuario , lastName:proyecto.apellido , type: proyecto.nombre_producto 
      , phone: proyecto.telefono , email: proyecto.correo , id:proyecto.ID_PRUECTOS};
      return this.http.put(this.API+'/edit', body);
  }

  updateProyect(proyecto:Proyecto , codigo : number){
    this.datos[codigo] = proyecto;
    console.log(proyecto);
    const body = { email: proyecto.correo , state : proyecto.estado , name: proyecto.nombre_usuario , 
      note: proyecto.anotation , stateB: this.actual, idProyecto: proyecto.ID_PRUECTOS};
      return this.http.put(this.API, body);
  }


  editarProyecto(codigo : number) {
    const proyecto = this.datos[codigo];
    const dialogo2 = this.dialogEdit.open(EditProyectComponent, {
      data: new Proyecto(proyecto.ID_PRUECTOS, proyecto.nombre_usuario, 
        proyecto.apellido, proyecto.nombre_producto, proyecto.telefono ,
         proyecto.correo , proyecto.estado , '')
    });
    dialogo2.afterClosed().subscribe(art => {
      if (art != undefined){
        this.editProyect(art , codigo).subscribe(res => console.log(res));
      }
    });
  }
  

  abrirDialogo(codigo : number) {
    const proyecto = this.datos[codigo];
   this.actual = proyecto.estado;
    const dialogo1 = this.dialog.open(DialogoarticuloComponent, {
      data: new Proyecto(proyecto.ID_PRUECTOS, proyecto.nombre_usuario, 
        proyecto.apellido, proyecto.nombre_producto, proyecto.telefono ,
         proyecto.correo , proyecto.estado , '')
    });


    dialogo1.afterClosed().subscribe(art => {
      if (art != undefined){
        this.datos[codigo] = art;
        this.updateProyect(art, codigo).subscribe(res => console.log(res));
      }
    });
  }
}

