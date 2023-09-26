import { Tabs, ICar } from 'types';
import createItem from '../createItem';

function createCar(data: Omit<ICar, 'id'>): Promise<ICar> {
  return createItem<ICar>(Tabs.garage, data);
}

export default createCar;
