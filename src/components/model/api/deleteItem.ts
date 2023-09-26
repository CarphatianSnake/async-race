import { Tabs } from 'types';
import useHttp from './useHttp';

const deleteItem = async (tabName: Tabs, id: number): Promise<void> => {
  const path = `${tabName}/${id}`;
  const options = { method: 'DELETE' };
  await useHttp(path, options);
};

export default deleteItem;
