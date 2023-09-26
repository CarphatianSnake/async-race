import CarForm from './carForm';

class CreateCarForm extends CarForm {
  constructor() {
    super();
    this.button.innerText = 'Create';
    this.nameInput.placeholder = 'Enter car name';
  }
}

export default CreateCarForm;
