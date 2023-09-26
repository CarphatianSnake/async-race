import garage from 'view/main/tab/garage';
import winners from 'view/main/tab/winners';
import { onUpdateCar } from 'controller/callbacks';

function editCarFormHandler(): void {
  const { form } = garage.editCarForm;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    onUpdateCar()
      .then(() => winners.update());
  });
}

export default editCarFormHandler;
