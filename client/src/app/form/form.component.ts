import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { HttpClient } from '@angular/common/http';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  API = "http://localhost:3000/Contact";
  constructor(public http: HttpClient , public service: NotificationsService) { }
  @Input() typeC :string = '';

  selectedContact: Contact = new Contact()

  ngOnInit(): void {  
  }

  saveContact() {
    if(!this.selectedContact.email.includes('@')){
      this.onError("Ingrese un correo valido");
    }
    if(this.selectedContact.lastName != undefined && this.selectedContact.firstName != undefined && this.selectedContact.email != undefined&& this.selectedContact.phone != undefined){
      const body = { name: this.selectedContact.firstName , lastName : this.selectedContact.lastName , 
        email: this.selectedContact.email , phone: this.selectedContact.phone , type: this.typeC};
        this.selectedContact = new Contact();
        this.http.post(this.API, body).subscribe(res => console.log(res));
    }else{
      this.onError("Todos los campos son obligatorios");
    }
   
  }


  onError(message: any){
    this.service.error('Error', message, {
      postition: ['bottom', 'right'],
      timeOut: 4000,
      animate: 'fade',
      showProgress: true
    });
  }

}
