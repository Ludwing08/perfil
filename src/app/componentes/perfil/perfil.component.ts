import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  correo = 'ludwing_2001@hotmail.com';
  numero = '0984512632';
  foto = '';

  constructor() { }

  ngOnInit(): void {
  }

}
