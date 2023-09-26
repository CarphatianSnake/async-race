import { ICar, Tabs } from 'types';
import createCar from './createCar';
import createCars from './createCars';
import getCar from './getCar';
import getCars from './getCars';
import deleteItem from '../deleteItem';
import updateItem from '../updateItem';

export const deleteCar = (id: number): Promise<void> => deleteItem(Tabs.garage, id);

export const updateCar = (id: number, data: Omit<ICar, 'id'>): Promise<ICar> => updateItem<ICar>(Tabs.garage, id, data);

export {
  createCar,
  createCars,
  getCar,
  getCars,
};
