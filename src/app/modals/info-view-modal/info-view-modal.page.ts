import { Component, OnInit, ViewChild, TemplateRef, AfterViewInit, AfterViewChecked, ElementRef, QueryList, ViewChildren, Input } from '@angular/core';
import { ModalController, NavParams, IonSlides } from '@ionic/angular';
import { InfosModel } from 'src/app/Models/infos.model';
import { InfoModel } from 'src/app/Models/info.model';


@Component({
  selector: 'app-info-view-modal',
  templateUrl: './info-view-modal.page.html',
  styleUrls: ['./info-view-modal.page.scss'],
})
export class InfoViewModalPage implements OnInit, AfterViewChecked, AfterViewInit {
  cases: TemplateRef<any> | null = null;

  @ViewChildren('templateList') queryList: QueryList<ElementRef>;
  @ViewChild('basicTemplate', { static: true }) basicTemplate: TemplateRef<any> | null = null;
  @ViewChild('advancedTemplate', { static: true }) advancedTemplate: TemplateRef<any> | null = null;
  @ViewChild('fullTemplate', { static: true }) fullTemplate: TemplateRef<any> | null = null;

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
    private modalController: ModalController
  ) { }


  ngOnInit() {
    this.infosDetails = this.navParamsPage.get('vDatas');
    this.position = this.navParamsPage.get('vIndex');
    this.sliderOpts.initialSlide = this.position;
    console.log('infosDetails ', this.infosDetails);

    // this.displayBlock(this.infosDetails.type);
  }

  ionViewWillEnter(): void {
  }

  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit' , this.queryList);
    // this.queryList.forEach((item: ElementRef) => {
    //   console.log('ForEach : ', item);
    // });
  }

  ngAfterViewChecked() {
  }


  // Show the correct block
  displayBlock(type: string) {

    if (this.infosDetails.type === 'advanced' || this.infosDetails.type === 'full') {
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

  onNext() {
    this.sliderRef.getActiveIndex().then((index: number) => {
      this.position = index;
      console.log('new position ', this.position);
    });
  }

  onCancel() {
    this.modalController.dismiss();
  }

}
