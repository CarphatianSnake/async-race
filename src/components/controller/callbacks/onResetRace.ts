import garage from 'view/main/tab/garage';
import onCarStop from './onCarStop';

const onResetRace = (): void => {
  const { carsList } = garage;
  Promise.allSettled(carsList.items.map((car) => onCarStop(car)));
};

export default onResetRace;
