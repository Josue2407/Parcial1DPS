import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'parcial1';
  registro =[];
  consulta:any;
  nombre:string;
  dui:string;
  mascota:string;
  tratamiento:string;
  medicamento:string;
  costo:number;
  visitas:number;
  costoDescuento:number;
  mensaje:string;
  mensaje2:string;

  constructor(){}

  ngOnInit(){
    this.nombre = '';
    this.dui ='';
    this.mascota = '';
    this.tratamiento = '';
    this.medicamento = '';
    this.costo = 0;
    this.costoDescuento = 0;
    this.visitas = 0;
    this.mensaje = '';
    this.mensaje2 = '';
  }
CalcularVisitas(valor:string){
  let conteo:number = 0;
    for (const persona of this.registro) {
     if (persona.dui ==valor) 
     {
       conteo++;
     }
    }
    this.visitas = conteo+1;
    this.mensaje = `El cliente tiene ${this.visitas} visitas.`;
}

  CalcularDescuento(){
    let descuento:number;
    if (this.visitas==2) {
      descuento = this.costo*0.05;
      this.costoDescuento = this.round ((this.costo-descuento),2);;
      this.mensaje2 = `Costo Total: ${this.costoDescuento} (5% descuento)`;
    }
    else if (this.visitas>=4) {
      descuento = this.costo*0.1;
      this.costoDescuento = this.round ((this.costo-descuento),2);
      this.mensaje2 = `Costo Total: ${this.costoDescuento} (10% descuento)`;
    }
    else {this.costoDescuento = this.costo;
      this.mensaje2 = `Costo Total: ${this.costoDescuento} (0% descuento)`;
    }

  }
  
  round(number, precision) {
    var factor = Math.pow(10, precision);
    var tempNumber = number * factor;
    var roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
  }

 Ingresar(){
 
this.consulta = {"nombre":this.nombre,"dui":this.dui,"mascota":this.mascota,"tratamiento":this.tratamiento,"medicamento":this.medicamento,"costo":this.costo,"costoDescuento":this.costoDescuento};
this.registro.push(this.consulta);
this.Limpiar();
 }

 Limpiar(){
   this.nombre = '';
   this.mascota = '';
   this.dui = '';
   this.medicamento = '';
   this.mensaje = '';
   this.tratamiento = '';
   this.costo = 0;
   this.mensaje2 = '';
 }

}
