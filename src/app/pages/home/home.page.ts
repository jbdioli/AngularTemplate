import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CoreDataStorageService } from 'src/app/services/core-data-storage.service';
import { Subscription } from 'rxjs';
import { InfoViewModalPage } from 'src/app/modals/info-view-modal/info-view-modal.page';
import { InfosModel } from 'src/app/Models/infos.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  obsSub: Subscription;

  infosDetails: InfosModel;

  constructor(
    private modalController: ModalController,
    private storage: CoreDataStorageService
    ) { }

  ngOnInit() {
    this.obsSub = this.storage.infoSubject.subscribe((response: InfosModel) => {
      this.infosDetails = response;
    });

    this.storage.getInfo();

  }


  async infoView(datas: any, index: number) {
    const myModal = await this.modalController.create({
      component: InfoViewModalPage,
      componentProps: {
        vDatas: datas,
        vIndex: index
      }
    });
    return await myModal.present();
  }


  onClick(index: number, type: string) {
    this.infosDetails.type = type;
    this.infoView(this.infosDetails, index);
  }

}
