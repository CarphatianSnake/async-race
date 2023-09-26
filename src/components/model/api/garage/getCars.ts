import store from 'model/store';
import { Tabs, ICar } from 'types';
import getItems from '../getItems';

async function getCars(): Promise<void> {
  const data = await getItems<ICar>(Tabs.garage);
  store.garage.data = data;
}

export default getCars;
