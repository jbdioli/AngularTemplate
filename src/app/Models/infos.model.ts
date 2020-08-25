import { InfoModel } from './info.model';

export class InfosModel {
    constructor(
      public isBasic: boolean,
      public isAdvance: boolean,
      public isFull: boolean,
      public infos: InfoModel[],
    ) {}
  }