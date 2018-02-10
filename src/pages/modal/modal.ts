import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  nombre: string = '';
  edad: number = 0;
  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.nombre = this.navParams.get('nombre');
    this.edad = this.navParams.get('edad');
    // console.log(this.nombre, this.edad);
  }

  cerrar_con_parametros(){
    let nom = this.nombre;
    let edad = this.edad;
    let data = {nom, edad};
    this.viewCtrl.dismiss(data);
  }
  cerrar(){
    this.viewCtrl.dismiss();
  }

}
