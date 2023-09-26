import { drawElement } from 'utils';
import './header.scss';

const drawHeader = (): HTMLElement => {
  const header = drawElement({ tag: 'header', classList: 'header' });
  const heading = drawElement({ tag: 'h1', classList: 'header__heading', innerText: 'Async Race' });
  header.append(heading);
  return header;
};

export default drawHeader;
