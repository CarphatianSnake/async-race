import garage from 'view/main/tab/garage';
import winners from 'view/main/tab/winners';
import {
  onCarStart,
  onCarStop,
  onCarEdit,
  onCarDelete,
} from 'controller/callbacks';
import { isHTMLElement } from 'utils';

function carsListHandlers(): void {
  garage.carsList.container.addEventListener('click', (e) => {
    const { target } = e;

    if (isHTMLElement(target)) {
      if (target.classList.contains('car-button_delete')) {
        onCarDelete(target)
          .then(() => winners.update());
      }
      if (target.classList.contains('car-button_edit')) {
        onCarEdit(target);
      }
      if (target.classList.contains('car-button_start')) {
        const car = garage.carsList.items.find((item) => item.buttons.start === target);
        onCarStart(car);
      }
      if (target.classList.contains('car-button_stop')) {
        const car = garage.carsList.items.find((item) => item.buttons.stop === target);
        onCarStop(car);
      }
    }
  });
}

export default carsListHandlers;
