import { drawElement } from 'utils';
import { Tabs } from 'types';
import Tab from '..';
import { CreateCarForm, EditCarForm } from './carForm';
import CarsList from './carsList';
import './garage.scss';

class Garage extends Tab {
  public createCarForm = new CreateCarForm();

  public editCarForm = new EditCarForm();

  public carsList = new CarsList();

  public garageButtons = drawElement({ tag: 'div', classList: 'garage-buttons-container' });

  public generateCarsButton = drawElement({ tag: 'button', classList: 'generate-cars-button', innerText: 'Generate Cars' });

  public startRaceButton = drawElement({ tag: 'button', classList: 'start-race-button', innerText: 'Race' });

  public resetRaceButton = drawElement({ tag: 'button', classList: 'reset-race-button', innerText: 'Reset' });

  constructor() {
    super(Tabs.garage);

    this.garageButtons.append(this.startRaceButton, this.resetRaceButton, this.generateCarsButton);

    this.tabContent.append(
      this.createCarForm.form,
      this.editCarForm.form,
      this.garageButtons,
      this.carsList.container,
      this.pagination.container,
    );
  }

  public update(): void {
    this.carsList.updateCarsList();
    this.pagination.update();
  }
}

const garage = new Garage();
export default garage;
