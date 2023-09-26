import garage from 'view/main/tab/garage';
import { getWinners, updateCar } from 'model/api';

const onUpdateCar = async (): Promise<void> => {
  const { editCarForm } = garage;
  const { nameInput, colorPicker } = editCarForm;

  if (editCarForm.car) {
    const carBody = { name: nameInput.value, color: colorPicker.value };
    const car = await updateCar(editCarForm.car.id, carBody);
    editCarForm.car.color = car.color;
    editCarForm.car.name = car.name;
    editCarForm.disable();
    await getWinners();
  }
};

export default onUpdateCar;
