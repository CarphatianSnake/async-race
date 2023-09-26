import { drawElement, capitalize } from 'utils';
import { WinnersHeadings } from 'types';

function drawHeading(name: WinnersHeadings): HTMLTableCellElement {
  return drawElement({
    tag: 'th',
    classList: ['winners-table__heading', `winners-table__heading_${name}`],
    innerText: name === WinnersHeadings.number ? '#' : capitalize(name),
  });
}

export default drawHeading;
