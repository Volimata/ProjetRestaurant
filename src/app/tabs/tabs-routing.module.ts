import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    canActivate: [AuthGuard],
    children: [
      
      {
        path: 'menu',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../menu/menu.module').then(m => m.MenuPageModule)
          }

        ]
      },
      {
        path: 'plat',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../plat/plat.module').then(m => m.PlatPageModule)
          },
          {
            path: 'ajouter',
            loadChildren: () => import('../plat/ajouter/ajouter.module').then( m => m.AjouterPageModule)
          },
          {
            path: 'modifier/:id', 
            loadChildren: () => import('../plat/modifier/modifier.module').then( m => m.ModifierPageModule)
          }
        ]
      },
      {
        path: 'compte',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../compte/compte.module').then(m => m.ComptePageModule)
          },
          { 
            path: 'connexion',
            loadChildren: () => import('../compte/connexion/connexion.module').then( m => m.ConnexionPageModule)
          },
          {
            path: 'inscription',
            loadChildren: () => import('../compte/inscription/inscription.module').then( m => m.InscriptionPageModule)
          }          

        ]
      },
      {
        path: 'profil',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../profil/profil.module').then(m => m.ProfilPageModule)
          }

        ]
      },
      {
        path: '',
        redirectTo: '/tabs/menu',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/menu',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
