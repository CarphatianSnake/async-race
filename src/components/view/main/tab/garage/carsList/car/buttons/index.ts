import { drawElement } from 'utils';
import './carButtons.scss';

class CarButtons {
  public start = drawElement({
    tag: 'button',
    classList: ['car-button', 'car-button_start'],
    innerText: 'D',
  });

  public stop = drawElement({
    tag: 'button',
    classList: ['car-button', 'car-button_stop'],
    attributes: { disabled: '' },
    innerText: 'P',
  });

  public edit = drawElement({
    tag: 'button',
    classList: ['car-button', 'car-button_edit'],
    innerText: 'Edit',
  });

  public delete = drawElement({
    tag: 'button',
    classList: ['car-button', 'car-button_delete'],
    innerText: 'Delete',
  });
}

export default CarButtons;
