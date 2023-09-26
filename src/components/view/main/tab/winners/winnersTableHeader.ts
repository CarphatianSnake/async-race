import { drawElement } from 'utils';
import { OrderTypes, SortTypes, WinnersHeadings } from 'types';
import drawHeading from './drawHeading';

class WinnersTableHeader {
  private element = drawElement({ tag: 'thead', classList: 'winners-table__header' });

  private headings = {
    wins: drawHeading(WinnersHeadings.wins),
    time: drawHeading(WinnersHeadings.time),
  };

  private orders = {
    wins: OrderTypes.asc,
    time: OrderTypes.asc,
  };

  constructor() {
    const headings = Object.values(WinnersHeadings);
    const row = drawElement({ tag: 'tr' });

    headings.forEach((name) => {
      const heading = drawHeading(name);

      if (name === WinnersHeadings.time || name === WinnersHeadings.wins) {
        heading.dataset.name = name;
        this.headings[name] = heading;

        const sortArrows = drawElement({ tag: 'div', classList: 'sort-arrows' });

        heading.append(sortArrows);
      }

      row.append(heading);
    });

    this.element.append(row);
  }

  public get container(): HTMLTableSectionElement {
    return this.element;
  }

  public setOrder(sortName: SortTypes.wins | SortTypes.time, value: OrderTypes): void {
    this.orders[sortName] = value;
  }

  public update(headingName: WinnersHeadings.time | WinnersHeadings.wins) {
    Object.entries(this.headings)
      .forEach((heading) => {
        const [name, element] = heading;
        if (name !== headingName) {
          element.removeAttribute('data-order');
        }
      });
  }
}

export default WinnersTableHeader;
