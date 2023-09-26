import { Tabs, IWinner } from 'src/types';
import getWinners from './getWinners';
import updateItem from '../updateItem';

function updateWinner(id: number, data: Omit<IWinner, 'id'>): Promise<void> {
  return updateItem<IWinner>(Tabs.winners, id, data)
    .then(getWinners);
}

export default updateWinner;
