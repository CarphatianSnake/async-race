import garage from 'view/main/tab/garage';
import winners from 'view/main/tab/winners';
import { isHTMLElement } from 'utils';
import onCarDelete from './onCarDelete';
import onCarEdit from './onCarEdit';
import onCarStart from './onCarStart';
import onCarStop from './onCarStop';

const onCarsListClick = async (e: MouseEvent): Promise<void> => {
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
};

export default onCarsListClick;
