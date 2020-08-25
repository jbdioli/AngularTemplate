import { Injectable } from '@angular/core';
import { InfoModel } from '../Models/info.model';
import { emit } from 'process';
import { Subject } from 'rxjs';
import { InfosModel } from '../Models/infos.model';

@Injectable({
  providedIn: 'root'
})
export class CoreDataStorageService {

  infoSubject = new Subject<InfosModel>();

  private dataList: InfoModel[] = [
    {name: 'Lundi', description: 'Ensoleillé'},
    {name: 'Mardi', description: 'Ensoleillé'},
    {name: 'Mercredi', description: 'Ensoleillé'},
    {name: 'Jeudi', description: 'Ensoleillé'},
    {name: 'Vendredi', description: 'Nuageux'},
    {name: 'Samedi', description: 'Ensoleillé'},
    {name: 'Dimanche', description: 'Pluie'}
  ];

  private datas: InfosModel = {
    isBasic: true,
    isAdvance: false,
    isFull: false,
    infos: this.dataList};

  constructor() { }

  getInfo() {
    this.infoSubject.next(this.datas);
  }

}
