import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefibrillateursPage } from './components/defibrillateurs/defibrillateurs.page';
import { CommandesComponent } from './components/commandes/commandes.component';

const routes: Routes = [
  { path: 'defibrillateurs', component: DefibrillateursPage },

  { path: 'commandes', component: CommandesComponent },

  { path: "", pathMatch: 'full', redirectTo: 'defibrillateurs'}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],

  exports: [
    RouterModule
  ]
})
export class HomePageRoutingModule {}
