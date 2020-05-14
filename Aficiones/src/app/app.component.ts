import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mensaje: string;
  resultado: string;
  // para recoger un array de hobbies
  arrayHobbies: any;

  constructor() {
    this.resultado = '';
    this.arrayHobbies = [];
  }

  pintarMensaje() {
    this.resultado = this.mensaje;
  }

  onHobbieEnviado($event) {
    let hobbieTemporal = { ...$event };
    this.arrayHobbies.push(hobbieTemporal);
    console.log(this.arrayHobbies);
  }
}
