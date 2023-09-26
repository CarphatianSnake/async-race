import garage from 'view/main/tab/garage';
import {
  getCars, getWinners, deleteCar, deleteWinner,
} from 'model/api';
import store from 'model/store';

const onCarDelete = async (target: HTMLElement): Promise<void> => {
  const { carsList, carsCounter, pagination } = garage;
  const targetData = carsList.items.find((item) => item.buttons.delete === target);

  if (targetData) {
    const { id } = targetData;

    if (carsList.items.length <= 1 && store.garage.data.length > 1) {
      store.garage.page -= 1;
    }

    await deleteCar(id).then(getCars);
    await deleteWinner(id).then(getWinners);

    carsList.updateCarsList();
    carsCounter.update();
    pagination.update();
  }
};

export default onCarDelete;
