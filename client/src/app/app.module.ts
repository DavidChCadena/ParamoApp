import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { DialogoarticuloComponent } from './dialogo-proyecto/dialogo-proyecto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import { AdminMaterialComponent } from './admin-material/admin-material.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductCharacteristicsComponent } from './product-characteristics/product-characteristics.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import {SimpleNotificationsModule} from 'angular2-notifications';
import { HistorialProyectComponent } from './historial-proyect/historial-proyect.component';
import { EditProyectComponent } from './edit-proyect/edit-proyect.component';
import { ContainerComponent } from './container/container.component';
import { CupulaComponent } from './cupula/cupula.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AdminPageComponent,
    LoginPageComponent,
    DialogoarticuloComponent,
    AdminMaterialComponent,
    FormComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    ProductCharacteristicsComponent,
    AdminHeaderComponent,
    HistorialProyectComponent,
    EditProyectComponent,
    ContainerComponent,
    CupulaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    FormsModule, 
    MatDialogModule,
    HttpClientModule,
    SimpleNotificationsModule.forRoot(),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
