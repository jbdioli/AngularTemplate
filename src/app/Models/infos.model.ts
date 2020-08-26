import { InfoModel } from './info.model';

export class InfosModel {
    constructor(
      public type: string,
      public infos: InfoModel[],
    ) {}
  }