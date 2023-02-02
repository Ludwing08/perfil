import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmailService } from 'src/app/servicios/email.service';

@Component({
  selector: 'app-contactame',
  templateUrl: './contactame.component.html',
  styleUrls: ['./contactame.component.css']
})
export class ContactameComponent implements OnInit {  

  ngOnInit(): void {
  }

  forma: FormGroup;
  
  constructor(private emailServicio: EmailService) {
    this.forma = new FormGroup({
      'nombre': new FormControl(),
      'correo': new FormControl(),
      'mensaje': new FormControl()
    });
  }
  
  enviarMensaje(nombre:string, email:String, mensaje:string) {
    this.emailServicio.enviarMensaje(nombre,email,mensaje)
  }

}
