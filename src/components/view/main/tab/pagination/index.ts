import store from 'model/store';
import { drawElement, animateTransition } from 'utils';
import { Tabs, PaginationButtons } from 'types';
import drawArrow from './drawArrow';
import './pagination.scss';

class Pagination {
  public readonly container = drawElement({ tag: 'nav', classList: 'pagination' });

  private tabName: Tabs;

  public readonly counter = drawElement({ tag: 'span', classList: 'pagination__counter' });

  private firstPage = drawArrow(PaginationButtons.first, '<<');

  private prevPage = drawArrow(PaginationButtons.prev, '<');

  private nextPage = drawArrow(PaginationButtons.next, '>');

  private lastPage = drawArrow(PaginationButtons.last, '>>');

  constructor(tabName: Tabs) {
    this.tabName = tabName;
    this.container.append(
      this.firstPage,
      this.prevPage,
      this.counter,
      this.nextPage,
      this.lastPage,
    );
  }

  public updateArrows(): void {
    const { page, pages } = store[this.tabName];
    const isFirstPage = page === 1;
    const isLastPage = page === pages;

    this.firstPage.toggleAttribute('disabled', isFirstPage || pages === 0);
    this.prevPage.toggleAttribute('disabled', isFirstPage || pages === 0);
    this.nextPage.toggleAttribute('disabled', isLastPage || pages === 0);
    this.lastPage.toggleAttribute('disabled', isLastPage || pages === 0);
  }

  public update(): void {
    animateTransition(this.counter, () => {
      this.counter.innerText = `${store[this.tabName].page}`;
    });

    this.updateArrows();
  }
}

export default Pagination;
