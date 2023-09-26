import { Tabs, ICar, IWinner } from 'types';
import useHttp from './useHttp';
import prepareOptions from './prepareOptions';

const updateItem = async <T>(
  tabName: Tabs,
  id: number,
  data: Omit<ICar, 'id'> | Omit<IWinner, 'id'>,
): Promise<T> => {
  const path = `${tabName}/${id}`;
  const options = prepareOptions('PUT', data);
  const response = await useHttp(path, options);
  return response.json();
};

export default updateItem;
