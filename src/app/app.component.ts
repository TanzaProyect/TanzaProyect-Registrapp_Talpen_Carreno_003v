import { Component } from '@angular/core';


interface Componente{

  icon: string;
  name: string;
  redirecTo: string;

}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  
  componentes : Componente[] = [
    {
      icon: 'walk-outline',
      name: 'Inicio',
      redirecTo: '/inicio'
    },
    {
      icon: 'heart-outline',
      name: 'Entretenimiento',
      redirecTo: '/entretenimiento'
    },
   
  ];
}
