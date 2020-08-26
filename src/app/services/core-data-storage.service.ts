import { Injectable } from '@angular/core';
import { InfoModel } from '../Models/info.model';
import { Subject } from 'rxjs';
import { InfosModel } from '../Models/infos.model';

@Injectable({
  providedIn: 'root'
})
export class CoreDataStorageService {

  infoSubject = new Subject<InfosModel>();

  private dataList: InfoModel[] = [
    {name: 'Lundi', description: 'Ensoleillé', city: 'Nice', country: 'France'},
    {name: 'Mardi', description: 'Ensoleillé', city: 'Nice', country: 'France'},
    {name: 'Mercredi', description: 'Ensoleillé', city: 'Nice', country: 'France'},
    {name: 'Jeudi', description: 'Ensoleillé', city: 'Nice', country: 'France'},
    {name: 'Vendredi', description: 'Nuageux', city: 'Nice', country: 'France'},
    {name: 'Samedi', description: 'Ensoleillé', city: 'Nice', country: 'France'},
    {name: 'Dimanche', description: 'Pluie', city: 'Nice', country: 'France'}
  ];

  private datas: InfosModel = {
    type: null,
    infos: this.dataList};

  constructor() { }

  getInfo() {
    this.infoSubject.next(this.datas);
  }

}
