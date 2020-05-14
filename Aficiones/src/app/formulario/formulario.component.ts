import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() hobbieEnviado: EventEmitter<any>;

  hobbies: any;
  nombre: string;
  aficion: string;

  constructor() {
    this.hobbies = {};
    this.hobbieEnviado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  guardarDatos() {
    this.hobbies.nombre = this.nombre;
    this.hobbies.aficion = this.aficion;
    this.hobbieEnviado.emit(this.hobbies);
    /*
    nombre: "nombre",
    Afición: "afición"
    */
  }

}
