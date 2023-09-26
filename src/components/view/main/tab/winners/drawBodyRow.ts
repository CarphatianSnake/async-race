import { drawElement } from 'utils';
import { WinnersHeadings, WinnerData } from 'types';

function drawBodyRow(number: number, data: WinnerData): HTMLTableRowElement {
  const cells = Object.values(WinnersHeadings);
  const row = drawElement({ tag: 'tr' });

  cells.forEach((cellName) => {
    const cell = drawElement({
      tag: 'td',
      classList: ['winners-table__cell', `winners-table__cell_${cellName}`],
    });

    switch (cellName) {
      case 'number':
        cell.textContent = `${number}`;
        break;
      case 'car':
        if (data.color) {
          cell.style.backgroundColor = data.color;
        }
        break;
      case 'time':
        cell.textContent = `${data.time}`;
        break;
      case 'wins':
        cell.textContent = `${data.wins}`;
        break;
      case 'name':
        if (data.name) {
          cell.textContent = `${data.name}`;
        }
        break;
      default:
    }

    row.append(cell);
  });

  return row;
}

export default drawBodyRow;
