import { Component, OnInit } from '@angular/core';
import { Plat } from 'src/app/Models/plat';
import { PlatService } from 'src/app/services/plat.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/utils.service';


@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.page.html',
  styleUrls: ['./ajouter.page.scss'],
})
export class AjouterPage implements OnInit {

  plat: Plat;
  constructor(private service: PlatService, 
    private toast: ToastController, 
    private route: Router, 
    private utils: UtilsService) {
    this.plat = new Plat();
    
  }

  ngOnInit() {
  }

  
  ajouterPlat(): void {
    this.service.postPlat(this.plat).subscribe(plat => {
      this.utils.presentToast("Plat ajouté avec succès.","success");
      this.route.navigate(['/tabs/plat']);
    }, error => {
      this.utils.presentToast("Une erreur est survenue","danger");
    })
  }

 

}
