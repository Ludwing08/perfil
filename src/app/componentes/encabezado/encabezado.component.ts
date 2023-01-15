import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  nombre:string='LUDWING';
  apellido:string= 'BARRIGA';
  carrera:string = 'Ingeniero de Software';

  constructor() { }

  ngOnInit(): void {
  }

}
