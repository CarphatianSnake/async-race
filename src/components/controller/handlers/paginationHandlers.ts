import { onPagination } from 'controller/callbacks';
import { getCars, getWinners } from 'model/api';
import winners from 'view/main/tab/winners';
import garage from 'view/main/tab/garage';
import { Tabs } from 'types';

function paginationHandlers(): void {
  garage.pagination.container.addEventListener('click', (e) => onPagination(e, Tabs.garage, async () => {
    await getCars();
    garage.update();
  }));
  winners.pagination.container.addEventListener('click', (e) => onPagination(e, Tabs.winners, async () => {
    await getWinners();
    winners.update();
  }));
}

export default paginationHandlers;
