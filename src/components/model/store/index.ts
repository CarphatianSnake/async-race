import GarageStorage from './garage';
import WinnersStorage from './winners';

class Store {
  private garageStore = new GarageStorage();

  private winnersStore = new WinnersStorage();

  public get garage(): GarageStorage {
    return this.garageStore;
  }

  public get winners(): WinnersStorage {
    return this.winnersStore;
  }
}

const store = new Store();

export default store;
