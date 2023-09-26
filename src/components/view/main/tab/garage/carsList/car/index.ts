import { animateTransition, drawElement } from 'utils';
import { Engine, ICar } from 'types';
import CarButtons from './buttons';
import CarTrack from './track';
import './carItem.scss';

class Car {
  private data: ICar;

  public track: CarTrack;

  public buttons = new CarButtons();

  public status: Engine = Engine.stop;

  private carInfo = drawElement({ tag: 'div', classList: 'car-info' });

  private carUI = drawElement({ tag: 'div', classList: 'car-ui' });

  private carInterface = drawElement({ tag: 'div', classList: 'car-interface' });

  private carName = drawElement({ tag: 'span', classList: 'car-name' });

  public container = drawElement({ tag: 'li', classList: 'cars-list__item' });

  public abortController = new AbortController();

  constructor(data: ICar) {
    this.data = data;
    this.carName.textContent = this.data.name;
    this.track = new CarTrack(this.data.color);

    this.carInfo.append(this.buttons.edit, this.buttons.delete, this.carName);
    this.carInterface.append(this.buttons.start, this.buttons.stop);
    this.carUI.append(this.carInterface, this.track.container);
    this.container.append(this.carInfo, this.carUI);
  }

  public get id(): number {
    return this.data.id;
  }

  public get color(): string {
    return this.data.color;
  }

  public set color(value: string) {
    this.data.color = value;
    this.track.setCarColor(this.data.color);
  }

  public get name(): string {
    return this.data.name;
  }

  public set name(value: string) {
    if (this.data.name !== value) {
      this.data.name = value;
      animateTransition(this.carName, () => {
        this.carName.textContent = this.data.name;
      });
    }
  }

  public setStatus(status: Engine): void {
    this.status = status;
  }
}

export default Car;
