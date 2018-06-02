import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {

  public alertClass:string = "alert-danger";
  public propiedades:Object = {
    danger: false
  }
  public loading:boolean =  false;

  constructor() { }

  ngOnInit() {
  }

  public execute () {
    this.loading = true;
    setTimeout(() => this.loading = false, 3000)
  }
}
