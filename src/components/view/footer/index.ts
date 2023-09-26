import { drawElement } from 'utils';
import drawRsLogo from './rsLogo';
import drawAuthor from './author';
import './footer.scss';

const drawFooter = (): HTMLElement => {
  const footer = drawElement({ tag: 'footer', classList: 'footer' });
  const rsLogo = drawRsLogo();
  const author = drawAuthor();

  footer.append(rsLogo);
  footer.append(author);

  return footer;
};

export default drawFooter;
