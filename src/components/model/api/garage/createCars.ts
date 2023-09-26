import generateCars from 'controller/generateCars';
import getCars from './getCars';
import createCar from './createCar';

async function createCars(): Promise<void> {
  const cars = generateCars();
  await Promise.allSettled(cars.map((car) => createCar(car)));
  await getCars();
}

export default createCars;
