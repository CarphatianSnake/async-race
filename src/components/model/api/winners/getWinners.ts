import store from 'model/store';
import { Tabs, IWinner, WinnerData } from 'types';
import getItems from '../getItems';
import { getCar } from '../garage';

async function getWinners(): Promise<void> {
  await getItems<IWinner>(Tabs.winners)
    .then(async (winners) => Promise.allSettled(winners.map(async (item) => getCar(item.id)
      .then((carData) => {
        if (carData) {
          const winnerData: WinnerData = {
            ...item,
            color: carData.color,
            name: carData.name,
          };
          return winnerData;
        }
        return item;
      })))
      .then((result) => {
        const data: WinnerData[] = [];
        result.forEach((item) => {
          if (item.status === 'fulfilled') {
            data.push(item.value);
          }
        });
        store.winners.data = data;
      }));
}

export default getWinners;
