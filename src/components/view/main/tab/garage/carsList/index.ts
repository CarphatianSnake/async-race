import store from 'model/store';
import { drawElement, animateTransition } from 'utils';
import { ICar } from 'types';
import Car from './car';
import './carsList.scss';

class CarsList {
  public container = drawElement({ tag: 'ul', classList: 'cars-list' });

  public items: Car[] = [];

  constructor() {
    this.updateCarsList();
  }

  public clear(): void {
    this.items.forEach((item) => item.container.remove());
    this.items = [];
  }

  public drawItem(data: ICar): void {
    const car = new Car(data);
    this.items.push(car);
    this.container.append(car.container);
  }

  public updateCarsList(): void {
    animateTransition(this.container, () => {
      this.clear();
      store.garage.data.forEach((car) => {
        this.drawItem(car);
      });
    });
  }
}

export default CarsList;
