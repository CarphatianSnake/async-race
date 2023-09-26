import Car from 'view/main/tab/garage/carsList/car';
import { stopEngine } from 'model/api';
import { Engine } from 'src/types';

const onCarStop = (car: Car | undefined): void => {
  if (car && car.status === Engine.drive) {
    car.buttons.start.removeAttribute('disabled');
    car.buttons.stop.setAttribute('disabled', '');

    car.buttons.stop.setAttribute('disabled', '');
    car.setStatus(Engine.stop);

    stopEngine(car.id)
      .then(() => {
        car.track.stopCarAnimation();
        car.abortController.abort();
        car.track.reset();
      })
      .catch(() => {
        car.buttons.stop.removeAttribute('disabled');
        car.setStatus(Engine.drive);
      });
  }
};

export default onCarStop;
