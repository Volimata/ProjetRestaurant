import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms'; 
import { AuthService } from 'src/app/services/auth.service'; 
import { Utilisateur } from 'src/app/Models/utilisateur'; 
import { Router } from '@angular/router'; 
import { UtilsService } from 'src/app/utils.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  inscriptionForm: FormGroup;
  user:Utilisateur
  constructor(private service: AuthService, 
    private utils: UtilsService, 
    private formBuilder: FormBuilder, 
    private route: Router) {
      this.user =this.user
     }

    ngOnInit() { this.inscriptionForm = this.formBuilder.group({ 
      'username' : [null, [Validators.required,Validators.minLength(3)]], 
      'mail' : [null, [Validators.required,Validators.email]], 
      'nom' : [null,[Validators.required,  ]],
      'prenom' : [null, [Validators.required]],
      'adresse' : [null, [Validators.required]],
      'phone' : [null,[Validators.required]],
      'password' : [null, [Validators.required]],
      'cpassword' : [null, [Validators.required]]

    });
     }
     inscription(){
        this.service.inscription(this.inscriptionForm.value).subscribe(data=>{
          console.log(this.inscriptionForm.value);
        this.utils.presentToast('Inscription réussie','success');
        this.route.navigateByUrl('connexion');
      },
    error=>{ 
      switch(error.error.message[0].message[0].id){
        case "Auth.form.error.email.taken":
          this.utils.presentToast('Email déja utilisé !','danger'); break;
        case "Auth.form.error.username.taken":
          this.utils.presentToast('User déja utilisé !','danger'); break;
        default: 
          console.log(error.error.message[0].message[0].id);
          this.utils.presentToast('Une erreur est survenue !','danger'); break;        
      }
      });

}
}