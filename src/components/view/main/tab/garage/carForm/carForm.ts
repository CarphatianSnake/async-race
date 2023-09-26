import { drawElement } from 'utils';
import './carForm.scss';

class CarForm {
  public form = drawElement({ tag: 'form', classList: 'car-form' });

  public nameInput = drawElement({ tag: 'input', classList: 'car-form__name-input', attributes: { type: 'text' } });

  public colorPicker = drawElement({ tag: 'input', classList: 'car-form__color-picker', attributes: { type: 'color' } });

  protected button = drawElement({ tag: 'button', classList: 'car-form__button' });

  constructor() {
    this.clearInputs();
    this.form.append(this.nameInput, this.colorPicker, this.button);
  }

  public clearInputs(): void {
    this.nameInput.value = '';
    this.colorPicker.value = '#ffffff';
  }
}

export default CarForm;
