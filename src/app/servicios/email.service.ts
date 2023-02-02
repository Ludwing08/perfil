import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http:HttpClient) { }


  enviarMensaje(nombre:string, email:String, mensaje:string) {
    this.http.post('http://localhost/servicios/emails.php', {nombre, email, mensaje})
      .subscribe(res => console.log('Mensaje enviado'));
  }
  
}
