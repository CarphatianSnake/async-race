import garage from 'view/main/tab/garage';
import { createCars } from 'model/api';

const onGenerateCars = async (): Promise<void> => {
  const { carsList, carsCounter, pagination } = garage;
  await createCars();
  carsList.updateCarsList();
  carsCounter.update();
  pagination.updateArrows();
};

export default onGenerateCars;
