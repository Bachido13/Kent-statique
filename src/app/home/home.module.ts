import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DefibrillateursPage } from './components/defibrillateurs/defibrillateurs.page';
import { CommandesComponent } from './components/commandes/commandes.component';

import { HomePageRoutingModule } from './home-routing.module';
import { DefibrillateurSingleComponent } from './components/defibrillateur-single/defibrillateur-single.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule
  ],

  declarations: [
    DefibrillateursPage,
    CommandesComponent,
    DefibrillateurSingleComponent
  ],

  exports: [
    DefibrillateursPage,
    CommandesComponent,
    DefibrillateurSingleComponent
  ]
})
export class HomePageModule {}
