import {
  IWinners,
  IWinnersParams,
  WinnerData,
  SortTypes,
  OrderTypes,
} from 'types';
import StorageBase from './base';

class WinnersStorage extends StorageBase<IWinners> {
  constructor() {
    super({
      page: 1,
      limit: 10,
      data: [],
      pages: 1,
      items: 0,
      sort: SortTypes.id,
      order: OrderTypes.asc,
    });
  }

  public get params(): IWinnersParams {
    return {
      page: this.store.page,
      limit: this.store.limit,
      sort: this.store.sort,
      order: this.store.order,
    };
  }

  public get data(): WinnerData[] {
    return this.store.data;
  }

  public set data(data: WinnerData[]) {
    this.store.data = data;
  }

  public get sort(): SortTypes {
    return this.store.sort;
  }

  public set sort(value: SortTypes) {
    this.store.sort = value;
  }

  public set order(value: OrderTypes) {
    this.store.order = value;
  }

  public get order(): OrderTypes {
    return this.store.order;
  }
}

export default WinnersStorage;
