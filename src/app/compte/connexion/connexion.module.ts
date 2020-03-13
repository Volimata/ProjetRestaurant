import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,FormBuilder, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnexionPageRoutingModule } from './connexion-routing.module';

import { ConnexionPage } from './connexion.page';

@NgModule({
  imports: [
    NgModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ConnexionPageRoutingModule
    
  ],
  declarations: [ConnexionPage]
})
export class ConnexionPageModule {}
