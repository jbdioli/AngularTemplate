import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams, IonSlides } from '@ionic/angular';
import { InfosModel } from 'src/app/Models/infos.model';

@Component({
  selector: 'app-info-view-modal',
  templateUrl: './info-view-modal.page.html',
  styleUrls: ['./info-view-modal.page.scss'],
})
export class InfoViewModalPage implements OnInit {

  infosDetails: InfosModel;
  index: number;

  @ViewChild('sliderRef', { static: true }) protected sliderRef: IonSlides;

  position: number;


  sliderOpts = {
    initialSlide: this.position,
    centeredSlides: true,
    passiveListeners: false,
  };

  constructor(
    private navParamsPage: NavParams,
    private modalController: ModalController,

  ) { }

  ngOnInit() {
    this.infosDetails = this.navParamsPage.get('vDatas');
    this.position = this.navParamsPage.get('index');

  }

  onCancel() {
    this.modalController.dismiss();
  }

}
