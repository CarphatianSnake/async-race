import { drawElement, capitalize } from 'utils';
import { Tabs } from 'types';
import CarsCounter from './carCounter';
import Pagination from './pagination';
import './tab.scss';

class Tab {
  public tabInput: HTMLInputElement;

  public tabItem: HTMLLIElement;

  protected tabName: HTMLLabelElement;

  public tabContent: HTMLElement;

  public carsCounter: CarsCounter;

  public name: Tabs;

  public pagination: Pagination;

  constructor(tabName: Tabs) {
    this.pagination = new Pagination(tabName);

    this.name = tabName;
    this.tabInput = drawElement({
      tag: 'input',
      classList: 'tabs-input',
      attributes: {
        id: tabName,
        type: 'radio',
        name: 'pages',
      },
    });
    this.tabItem = drawElement({ tag: 'li', classList: ['tabs-nav__list__item', `${tabName}-tab`] });
    this.tabName = drawElement({
      tag: 'label', classList: 'tabs-nav__label', attributes: { for: tabName }, innerText: capitalize(tabName),
    });
    this.tabContent = drawElement({ tag: 'article', classList: `${tabName}-tab` });
    this.carsCounter = new CarsCounter(tabName);

    if (tabName === Tabs.garage) {
      this.tabInput.setAttribute('checked', '');
    }

    this.tabContent.append(this.carsCounter.heading);
    this.tabItem.append(this.tabName);
  }
}

export default Tab;
