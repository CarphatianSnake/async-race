import { ICar, Tabs } from 'src/types';
import getItem from '../getItem';

function getCar(id: number): Promise<ICar | undefined> {
  return getItem<ICar>(Tabs.garage, id);
}

export default getCar;
