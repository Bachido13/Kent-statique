import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DefibrillateursPage } from './components/defibrillateurs/defibrillateurs.page';
import { CommandesComponent } from './components/commandes/commandes.component';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],

  declarations: [
    DefibrillateursPage,
    CommandesComponent
  ],

  exports: [
    DefibrillateursPage,
    CommandesComponent
  ]
})
export class HomePageModule {}
