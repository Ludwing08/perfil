import { Component, OnInit,ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {  
  msg = 'Ludwing Barriga'

  constructor(    
  ) {}

  ngOnInit(): void {
    setInterval(() => {
      this.msg = 'Ludwing Barriga '
    }, 1000);
  }

}
