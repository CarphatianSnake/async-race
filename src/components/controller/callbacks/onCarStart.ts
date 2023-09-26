import { startEngine, goDrive } from 'model/api';
import Car from 'view/main/tab/garage/carsList/car';
import { IRaceResult, Engine } from 'types';

const onCarStart = (car: Car | undefined): Promise<IRaceResult> | void => {
  if (car && car.status === Engine.stop) {
    car.buttons.stop.removeAttribute('disabled');
    car.buttons.start.setAttribute('disabled', '');

    const result = startEngine(car.id)
      .then((data) => {
        if (car.status === Engine.stop) {
          const raceResult = car.track.animateCar(data.velocity);
          car.setStatus(Engine.drive);

          goDrive(car.id, car.abortController.signal)
            .catch((error) => {
              if (error.status === 500) {
                car.track.stopCarAnimation();
              }
            });

          return raceResult;
        }
        return undefined;
      })
      .then((time) => {
        const raceResult: IRaceResult = {
          id: car.id,
          name: car.name,
          time,
        };
        return raceResult;
      });

    return result;
  }
  return undefined;
};

export default onCarStart;
