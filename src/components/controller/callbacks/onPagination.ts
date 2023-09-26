import store from 'model/store';
import winners from 'view/main/tab/winners';
import garage from 'view/main/tab/garage';
import { isHTMLElement } from 'utils';
import { PaginationButtons, Tabs } from 'types';

async function onPagination(
  e: MouseEvent,
  tabName: Tabs,
  callback: () => Promise<void>,
): Promise<void> {
  const { target, currentTarget } = e;
  const {
    first,
    prev,
    next,
    last,
  } = PaginationButtons;

  const notCounter = target !== winners.pagination.counter && target !== garage.pagination.counter;
  const notLastPage = store[tabName].page <= store[tabName].pages;
  const notCurrentTarget = target !== currentTarget;

  if (isHTMLElement(target) && notCounter && notLastPage && notCurrentTarget) {
    if (target.classList.contains(next)) {
      store[tabName].page += 1;
    }
    if (target.classList.contains(prev) && store[tabName].page > 0) {
      store[tabName].page -= 1;
    }
    if (target.classList.contains(first)) {
      store[tabName].page = 1;
    }
    if (target.classList.contains(last)) {
      store[tabName].page = store[tabName].pages;
    }

    await callback();
  }
}

export default onPagination;
