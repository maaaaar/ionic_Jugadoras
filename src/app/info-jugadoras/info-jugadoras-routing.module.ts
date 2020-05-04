import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoJugadorasPage } from './info-jugadoras.page';

const routes: Routes = [
  {
    path: '',
    component: InfoJugadorasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoJugadorasPageRoutingModule {}
