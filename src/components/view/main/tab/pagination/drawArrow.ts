import { drawElement } from 'utils';
import { PaginationButtons, PaginationArrows } from 'types';

function drawArrow(className: PaginationButtons, arrow: PaginationArrows): HTMLButtonElement {
  return drawElement({
    tag: 'button',
    classList: ['pagination__button', className],
    innerText: arrow,
  });
}

export default drawArrow;
