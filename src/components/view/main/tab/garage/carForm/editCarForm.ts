import Car from '../carsList/car';
import CarForm from './carForm';

class EditCarForm extends CarForm {
  public car: Car | null = null;

  constructor() {
    super();
    this.button.innerText = 'Edit';
    this.disable();
  }

  public activate(car: Car): void {
    this.car = car;
    this.nameInput.removeAttribute('disabled');
    this.colorPicker.removeAttribute('disabled');
    this.nameInput.value = car.name;
    this.colorPicker.value = car.color;
    this.button.removeAttribute('disabled');
  }

  public disable(): void {
    this.car = null;
    this.nameInput.setAttribute('disabled', '');
    this.colorPicker.setAttribute('disabled', '');
    this.button.setAttribute('disabled', '');
    this.clearInputs();
  }
}

export default EditCarForm;
