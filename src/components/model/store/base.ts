import { IGarage, IWinners } from 'types';

class StorageBase<T extends IGarage | IWinners> {
  protected store: T;

  constructor(initialData: T) {
    this.store = initialData;
  }

  public set page(value: number) {
    this.store.page = value;
  }

  public get page(): number {
    return this.store.page;
  }

  public get pages(): number {
    return this.store.pages;
  }

  public set items(value: number) {
    this.store.items = value;
    this.store.pages = Math.ceil(this.store.items / this.store.limit);
  }

  public get items(): number {
    return this.store.items;
  }

  public get limit(): number {
    return this.store.limit;
  }
}

export default StorageBase;
