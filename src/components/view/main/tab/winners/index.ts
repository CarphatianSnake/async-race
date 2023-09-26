import store from 'model/store';
import { animateTransition, drawElement } from 'utils';
import { Tabs } from 'types';
import Tab from '..';
import drawBodyRow from './drawBodyRow';
import './winners.scss';
import WinnersTableHeader from './winnersTableHeader';

class Winners extends Tab {
  private element = drawElement({ tag: 'table', classList: 'winners-table' });

  private items: HTMLTableRowElement[] = [];

  private tableBody = drawElement({ tag: 'tbody', classList: 'winners-table__body' });

  public readonly header = new WinnersTableHeader();

  constructor() {
    super(Tabs.winners);
    this.table.append(this.header.container, this.tableBody);
    this.tabContent.append(this.table, this.pagination.container);
  }

  public get table(): HTMLTableElement {
    return this.element;
  }

  private drawBodyContent(): void {
    store.winners.data.forEach((item, index) => {
      const pageCoefficient = (store.winners.page - 1) * 10;
      const countNumber = index + 1;
      const position = pageCoefficient + countNumber;
      const row = drawBodyRow(position, item);
      this.items.push(row);
      this.tableBody.append(row);
    });
  }

  private clear(): void {
    this.items.forEach((item) => item.remove());
    this.items = [];
  }

  public update(): void {
    this.clear();
    this.carsCounter.update();
    this.pagination.update();
    animateTransition(this.tableBody, () => this.drawBodyContent());
  }
}

const winners = new Winners();
export default winners;
