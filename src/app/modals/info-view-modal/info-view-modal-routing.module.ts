import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoViewModalPage } from './info-view-modal.page';

const routes: Routes = [
  {
    path: '',
    component: InfoViewModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoViewModalPageRoutingModule {}
