import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-entretenimiento',
  templateUrl: './entretenimiento.page.html',
  styleUrls: ['./entretenimiento.page.scss'],
})
export class EntretenimientoPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}

