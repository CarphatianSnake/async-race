import store from 'model/store';
import { Tabs, IWinner, ICar } from 'types';
import useHttp from './useHttp';

const getItems = async <T extends IWinner | ICar>(tabName: Tabs): Promise<T[]> => {
  const query = Object.entries(store[tabName].params)
    .reduce((q, [key, value]) => {
      if (value) {
        const separator = q ? '&' : '?';

        return `${q}${separator}_${key}=${value}`;
      }

      return q;
    }, '');
  const path = `${tabName}${query}`;

  return useHttp(path)
    .then((res) => {
      const itemsCount = Number(res.headers.get('X-Total-Count'));
      store[tabName].items = itemsCount;
      if (!res.ok) {
        throw new Error();
      }
      return res.json();
    })
    .catch(() => []);
};

export default getItems;
