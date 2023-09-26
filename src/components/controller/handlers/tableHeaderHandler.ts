import store from 'model/store';
import winners from 'view/main/tab/winners';
import { isHTMLElement } from 'utils';
import { OrderTypes, SortTypes, WinnersHeadings } from 'types';
import { getWinners } from 'src/components/model/api';

function tableHeaderHandler(): void {
  winners.header.container.addEventListener('click', (e) => {
    const { target } = e;

    if (isHTMLElement(target)) {
      if (target.dataset.name) {
        const dataName = target.dataset.name;

        if (dataName === SortTypes.wins || dataName === SortTypes.time) {
          store.winners.sort = dataName;

          const setOrder = (order: OrderTypes): void => {
            target.dataset.order = order;
            winners.header.setOrder(dataName, order);
            store.winners.order = order;
          };

          if (target.dataset.order === OrderTypes.asc) {
            setOrder(OrderTypes.desc);
          } else if (target.dataset.order === OrderTypes.desc || !target.dataset.order) {
            setOrder(OrderTypes.asc);
          }

          getWinners()
            .then(() => {
              const isWins = target.dataset.name === WinnersHeadings.wins;
              const headingName = isWins ? WinnersHeadings.wins : WinnersHeadings.time;
              if (dataName) {
                winners.header.update(headingName);
              }
              winners.update();
            });
        }
      }
    }
  });
}

export default tableHeaderHandler;
