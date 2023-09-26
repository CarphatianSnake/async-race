import store from 'model/store';
import { drawElement, animateTransition } from 'utils';
import { Tabs } from 'types';
import './carCounter.scss';

class CarsCounter {
  public heading = drawElement({ tag: 'h3', classList: 'counter', innerText: 'Cars: ' });

  public counter = drawElement({ tag: 'span', classList: 'counter__value' });

  private tabName: Tabs;

  constructor(tabName: Tabs) {
    this.tabName = tabName;
    this.init();
  }

  update(): void {
    animateTransition(this.counter, () => {
      this.counter.textContent = store[this.tabName].items.toString();
    });
  }

  init(): void {
    this.heading.append(this.counter);
    this.update();
  }
}

export default CarsCounter;
