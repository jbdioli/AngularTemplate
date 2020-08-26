import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ModalController, NavParams, IonSlides } from '@ionic/angular';
import { InfosModel } from 'src/app/Models/infos.model';

@Component({
  selector: 'app-info-view-modal',
  templateUrl: './info-view-modal.page.html',
  styleUrls: ['./info-view-modal.page.scss'],
})
export class InfoViewModalPage implements OnInit {
  cases: TemplateRef<any> | null = null;

  @ViewChild('basicTemplate', { static: true })
  basicTemplate: TemplateRef<any> | null = null;
  @ViewChild('advancedTemplate', { static: true })
  advancedTemplate: TemplateRef<any> | null = null;
  @ViewChild('fullTemplate', { static: true })
  fullTemplate: TemplateRef<any> | null = null;


  @ViewChild('sliderRef', { static: true }) protected sliderRef: IonSlides;


  isCases = false;
  infosDetails: InfosModel;
  index: number;
  position: number;


  sliderOpts = {
    initialSlide: null,
    centeredSlides: true,
    passiveListeners: false,
  };

  constructor(
    private navParamsPage: NavParams,
    private modalController: ModalController,

  ) { }

  ngOnInit() {
    this.infosDetails = this.navParamsPage.get('vDatas');
    this.position = this.navParamsPage.get('vIndex');
    this.sliderOpts.initialSlide = this.position;
    console.log('position ', this.position);

    this.displayBlock(this.infosDetails.type);
  }


  // Show the correct block
  displayBlock(type: string) {

    if (type === 'advanced' || type === 'full') {
      this.isCases = true;
    }
    console.log('displayBlock type / isCases : ', type, this.isCases);

    switch (type) {
      case 'advanced':
        this.cases = this.advancedTemplate;
        console.log('advanced template', this.cases, this.advancedTemplate);
        break;
      case 'full':
        this.cases = this.fullTemplate;
        console.log('full template : ', this.cases, this.fullTemplate);
        break;
    }
  }

  onCancel() {
    this.modalController.dismiss();
  }

}
