import { drawElement } from 'utils';
import { IDrawElementProps } from 'types';
import './rsLogo.scss';

const drawRsLogo = (): HTMLAnchorElement => {
  const options: IDrawElementProps<'a'> = {
    tag: 'a',
    classList: 'rs-logo',
    attributes: {
      href: 'https://rs.school/js/',
      target: '__blank',
      title: 'RS School JS Course',
    },
  };

  const rsLogo = drawElement(options);
  return rsLogo;
};

export default drawRsLogo;
