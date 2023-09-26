import garage from 'view/main/tab/garage';
import { onCreateCar } from '../callbacks';

function createCarFormHandler(): void {
  const { form } = garage.createCarForm;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    onCreateCar();
  });
}

export default createCarFormHandler;
