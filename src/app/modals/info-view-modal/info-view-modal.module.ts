import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoViewModalPageRoutingModule } from './info-view-modal-routing.module';

import { InfoViewModalPage } from './info-view-modal.page';
import { AdvancedComponent } from 'src/app/components/advanced/advanced.component';
import { FullComponent } from 'src/app/components/full/full.component';
import { BasicComponent } from 'src/app/components/basic/basic.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoViewModalPageRoutingModule
  ],
  declarations: [
    InfoViewModalPage,

    // Components
    BasicComponent,
    AdvancedComponent,
    FullComponent
  ]
})
export class InfoViewModalPageModule {}
