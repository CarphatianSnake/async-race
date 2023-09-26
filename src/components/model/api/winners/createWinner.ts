import { Tabs, IWinner } from 'types';
import createItem from '../createItem';
import getWinners from './getWinners';

function createWinner(data: IWinner): Promise<void> {
  return createItem<IWinner>(Tabs.winners, data)
    .then(getWinners);
}

export default createWinner;
