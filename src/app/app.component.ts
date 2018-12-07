import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  nombre = "Jefersson";
  nombre2 = "jeferSSon daVId bustAMAnte álVArez"
  arreglo = [1,2,3,4,5,6,7,8,9,0];
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;
  heroe = {
    nombre : 'Logan',
    clave : 'Wolverine',
    edad : 500,
    direccion :{
       calle : 'falsa 123',
       casa : '101'
    }
  };
  valor = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve ('resuelto!!!'), 3500)
  });
  fecha = new Date();
  video = 'BbG1b7TjLk0'
  activar:boolean = true;
}
