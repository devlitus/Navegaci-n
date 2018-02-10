import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalPage } from "../index.paginas";

@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController ) {
  }
  /* 
  @param 1 página a navegar
  */
  activarPrincipal(){
    this.navCtrl.parent.select(1); //Retorno a la pagina deseada 
  }
  mostrar_modal(){
    let modal = this.modalCtrl.create(ModalPage, {nombre: 'carles', edad: 40});
    modal.present();
    modal.onDidDismiss(paramertros =>{
      if (paramertros) {
        console.log('Params del modal: ', paramertros);
      }else{
        console.log(('cerrar sin parametros'));
      }
    });
  }
}
