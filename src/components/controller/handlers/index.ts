import createCarFormHandler from './createCarFormHandler';
import editCarFormHandler from './editCarFormHandler';
import carsListHandlers from './carsListHandlers';
import paginationHandlers from './paginationHandlers';
import garageButtonsHandler from './garageButtonsHandler';
import tableHeaderHandler from './tableHeaderHandler';

function activateListeners(): void {
  createCarFormHandler();
  editCarFormHandler();
  carsListHandlers();
  paginationHandlers();
  garageButtonsHandler();
  tableHeaderHandler();
}

export default activateListeners;
