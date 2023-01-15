import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  @Input() progress?:number;
  //progress: number = 70;    
  @Input() habilidad?:string;
  @Input() indice?:number;

  

  constructor() { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {       
    let scrollProgress = document.getElementById('circulo');
    scrollProgress!.style.background = `conic-gradient(#008fff ${this.progress}%, #f2f2f4 ${this.progress}%)`;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadData();
  }

}
