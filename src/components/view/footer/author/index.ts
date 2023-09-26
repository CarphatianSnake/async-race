import { drawElement } from 'utils';
import { IDrawElementProps } from 'types';
import './author.scss';

const drawAuthor = (): HTMLDivElement => {
  const author = drawElement({ tag: 'div', classList: 'author' });
  const madeBy = drawElement({ tag: 'div' });
  const madeByText = drawElement({ tag: 'span', innerText: 'Made by' });
  const authorGithubOptions: IDrawElementProps<'a'> = {
    tag: 'a',
    classList: 'author__github',
    innerText: 'CarphatianSnake',
    attributes: {
      href: 'https://github.com/CarphatianSnake/',
      name: 'CarphatianSnake Github',
      target: '__blank',
    },
  };
  const authorGithub = drawElement(authorGithubOptions);
  const year = drawElement({ tag: 'div', innerText: '2023' });

  madeBy.append(madeByText);
  madeBy.append(authorGithub);
  author.append(madeBy);
  author.append(year);

  return author;
};

export default drawAuthor;
