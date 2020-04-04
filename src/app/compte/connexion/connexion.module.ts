import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ConnexionPageRoutingModule } from './Connexion-routing.module';
import { ConnexionPage } from './connexion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnexionPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ConnexionPage]
})
export class ConnexionPageModule {}
