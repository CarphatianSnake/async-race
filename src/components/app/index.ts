import View from 'view';
import { getCars, getWinners } from 'model/api';
import activateListeners from 'controller/handlers';

const app = async () => {
  await getCars();
  await getWinners();

  const view = new View();
  view.init();

  activateListeners();
};

export default app;
