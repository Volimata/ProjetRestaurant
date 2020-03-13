import { Component, OnInit } from '@angular/core';
import { Plat } from 'src/app/Models/plat';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.page.html',
  styleUrls: ['./ajouter.page.scss'],
})
export class AjouterPage implements OnInit {

  constructor() {
    this.plat= new Plat
   }
  plat: Plat
  EnregistrerPlat(){
    console.log(this.plat)
  }



  ngOnInit() {
  }

}
