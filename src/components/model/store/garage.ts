import { ICar, IGarage, IParams } from 'types';
import StorageBase from './base';

class GarageStorage extends StorageBase<IGarage> {
  constructor() {
    super({
      page: 1,
      limit: 7,
      data: [],
      pages: 1,
      items: 0,
    });
  }

  public get params(): IParams {
    return {
      page: this.store.page,
      limit: this.store.limit,
    };
  }

  public get data(): ICar[] {
    return this.store.data;
  }

  public set data(data: ICar[]) {
    this.store.data = data;
  }
}

export default GarageStorage;
