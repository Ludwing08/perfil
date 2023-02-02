import { Component, OnInit } from '@angular/core';
import * as  AOS from 'aos';

declare var bootstrap: any;


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})


export class InicioComponent implements OnInit {

  
  constructor() { }
  

  ngOnInit(): void {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })   ;

    AOS.init();
    window.addEventListener('load',AOS.refresh)

  }

  title = 'app-perfil';
  habilidades ?: number[] = [30, 80, 70];



}
