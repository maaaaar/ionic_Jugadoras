import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoJugadorasPageRoutingModule } from './info-jugadoras-routing.module';

import { InfoJugadorasPage } from './info-jugadoras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoJugadorasPageRoutingModule
  ],
  declarations: [InfoJugadorasPage]
})
export class InfoJugadorasPageModule {}
