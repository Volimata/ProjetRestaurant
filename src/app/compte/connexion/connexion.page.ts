import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { ToastController } from '@ionic/angular'; 
import { Router } from '@angular/router'; 
import { UtilsService } from 'src/app/utils.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit 
{
  loginForm: FormGroup;
  username:string;
  email: string;
   constructor(private service : AuthService, 
    private formBuilder: FormBuilder, 
    private toastController: ToastController, 
    private route : Router,
    private utils: UtilsService) { } 
    ngOnInit() { 

      this.loginForm = this.formBuilder.group({ 
        'identifier' : [null, [Validators.required,Validators.email]], 
        'password' : [null, [Validators.required]] }); 
      }

      login(userInfo: any){
        console.log(this.service.redirectUrl);
        this.service.login(userInfo).subscribe(data=>{
          this.service.isAuth = true;
          window.localStorage.setItem('token',data.jwt);
          this.username = userInfo.identifier ;
          window.localStorage.setItem('username', this.username);
          this.route.navigateByUrl(this.service.redirectUrl);
        },error=>{
          this.utils.presentToast("Nom d'utilisateur ou mot de passe incorect",'danger');
        });
       } 
      }

