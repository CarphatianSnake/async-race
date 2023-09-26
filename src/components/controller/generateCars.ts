import { generateColor, generateRandomNumber } from 'utils';
import { ICar, Vendors, Models } from 'types';

function generateCars(): Omit<ICar, 'id'>[] {
  const cars: Omit<ICar, 'id'>[] = [];

  for (let i = 0; i < 100; i += 1) {
    const vendors: Vendors[] = Object.values(Vendors);
    const models: Models[] = Object.values(Models);
    const vendor: Vendors = vendors[generateRandomNumber(vendors.length - 1)];
    const model: Models = models[generateRandomNumber(models.length - 1)];
    const name = `${vendor} ${model}`;

    const car = {
      name,
      color: generateColor(),
    };
    cars.push(car);
  }

  return cars;
}

export default generateCars;
