import {
  Tabs, BodyData, ICar, IWinner,
} from 'types';
import useHttp from './useHttp';
import prepareOptions from './prepareOptions';

const createItem = async <T extends ICar | IWinner>(tabName: Tabs, data: BodyData): Promise<T> => {
  const options = prepareOptions('POST', data);
  const response = await useHttp(tabName, options);
  return response.json();
};

export default createItem;
