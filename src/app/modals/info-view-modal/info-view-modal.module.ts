import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoViewModalPageRoutingModule } from './info-view-modal-routing.module';

import { InfoViewModalPage } from './info-view-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoViewModalPageRoutingModule
  ],
  declarations: [InfoViewModalPage]
})
export class InfoViewModalPageModule {}
