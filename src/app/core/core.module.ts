import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    HeaderComponent
  ],

  imports: [
    CommonModule,
    HttpClientModule,
    IonicModule.forRoot()
  ],

  exports: [
    HeaderComponent
  ],

  providers: [
    { provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    }
  ],
})
export class CoreModule { }
