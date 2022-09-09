import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 

  usuario={
    nombre:'',
    email:'',
    password:'',
    password2:''
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }
  

}
