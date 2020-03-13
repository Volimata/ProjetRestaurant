import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { PlatService } from '../services/plat.service';
import { Plat } from '../Models/plat';

@Component({
  selector: 'app-plat',
  templateUrl: 'plat.page.html',
  styleUrls: ['plat.page.scss']
})
export class PlatPage {

  plats : Plat[];
  constructor (private  router: Router, private service: PlatService){
   this.getAllPlat();
    
  }

  getAllPlat() {
    this.service.getAll().subscribe(plats=>{
      this.plats= plats;
      
    },error=> {
      console.log(error);
    });
  }
  modifier(id:number){
    this.router.navigateByUrl("/tabs/plat/modifier/"+ id)
  }
  supprimer(id:number){
    this.service.delete(id).subscribe(() => {
      console.log("Plat supprimé ")
      this.getAllPlat();
    });
    
    }
     
}
