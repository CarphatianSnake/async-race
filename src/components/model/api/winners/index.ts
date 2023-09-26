import { IWinner, Tabs } from 'src/types';
import createWinner from './createWinner';
import updateWinner from './updateWinner';
import getWinners from './getWinners';
import getItem from '../getItem';
import deleteItem from '../deleteItem';

const getWinner = (id: number): Promise<IWinner | undefined> => getItem<IWinner>(Tabs.winners, id);

const deleteWinner = (id: number): Promise<void> => deleteItem(Tabs.winners, id);

export {
  getWinner,
  deleteWinner,
  createWinner,
  updateWinner,
  getWinners,
};
