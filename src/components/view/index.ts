import { drawElement } from 'utils';
import drawHeader from './header';
import Main from './main';
import drawFooter from './footer';
import './view.scss';

import winners from './main/tab/winners';
import garage from './main/tab/garage';

class View {
  private appView = drawElement({ tag: 'div', classList: 'wrapper' });

  public main = new Main();

  public init(): void {
    this.appView.append(drawHeader());
    this.appView.append(this.main.container);
    this.appView.append(drawFooter());
    document.body.append(this.appView);

    winners.update();
    garage.update();
  }
}

export default View;
