import garage from 'view/main/tab/garage';
import store from 'model/store';
import { createCar } from 'model/api';

const onCreateCar = async (): Promise<void> => {
  const {
    carsList, carsCounter, pagination, createCarForm,
  } = garage;
  const { nameInput, colorPicker } = createCarForm;

  const car = await createCar({ name: nameInput.value, color: colorPicker.value });

  createCarForm.clearInputs();

  if (carsList.items.length < store.garage.limit) {
    carsList.drawItem(car);
  }

  store.garage.items += 1;
  carsCounter.update();
  pagination.updateArrows();
};

export default onCreateCar;
