import { drawElement } from 'utils';
// import Garage from './tab/garage';
// import Winners from './tab/winners';
import winners from './tab/winners';
import garage from './tab/garage';
import './main.scss';

class Main {
  public container = drawElement({ tag: 'main', classList: 'main' });

  private navigation = drawElement({ tag: 'nav', classList: 'tabs-nav' });

  private tabsContainer = drawElement({ tag: 'section', classList: 'tabs-wrapper' });

  // public readonly winners = new Winners();

  // public readonly garage = new Garage();

  constructor() {
    const navigationList = drawElement({ tag: 'ul', classList: 'tabs-nav__list' });

    // navigationList.append(this.garage.tabItem, this.winners.tabItem);
    navigationList.append(garage.tabItem, winners.tabItem);

    // this.tabsContainer.append(this.garage.tabContent, this.winners.tabContent);
    this.tabsContainer.append(garage.tabContent, winners.tabContent);

    this.navigation.append(navigationList);
    this.container.append(
      // this.garage.tabInput,
      garage.tabInput,
      // this.winners.tabInput,
      winners.tabInput,
      this.navigation,
      this.tabsContainer,
    );
  }
}

export default Main;
