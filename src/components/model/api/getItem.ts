import { IWinner, ICar, Tabs } from 'types';
import ApiError from 'controller/errors';
import useHttp from './useHttp';

const getItem = async <T extends ICar | IWinner>(
  tabName: Tabs,
  id: number,
): Promise<T | undefined> => {
  const response = await useHttp(`${tabName}/${id}`);

  if (!response.ok) {
    // throw new Error(`${response.status}`);
    throw new ApiError('Error', response.status, response.statusText);
  }

  return response.json();
};

export default getItem;
