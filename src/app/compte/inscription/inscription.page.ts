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

  registerForm: FormGroup; constructor(private formBuilder: FormBuilder, 
    private service: AuthService, 
    private route: Router, 
    private utils: UtilsService) { } 
    ngOnInit() { this.registerForm = this.formBuilder.group({ 
      'login' : [null, [Validators.required,Validators.minLength(3)]], 
      'email' : [null, [Validators.required,Validators.email]], 
      'motdepass' : [null, [Validators.required]] });
     }
     register(userInfo: Utilisateur){
      console.log(this.registerForm);
      this.service.register(userInfo).subscribe(data=>{
        this.utils.presentToast('Inscription réussie','success');
        this.route.navigateByUrl('login');
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