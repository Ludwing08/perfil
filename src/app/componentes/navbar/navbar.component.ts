import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mdbCollapse?:string

  selectedItem?: string

  rightAligned(mdbCollapse:string){

  }


  constructor() { }

  ngOnInit(): void {
  }


  cv(){
    const link = document.createElement('a');
    link.href = '../../assets/cv/cv.pdf';
    link.download = 'cv.pdf';
    link.click();
  }

}
