import drawElement from './drawElement';
import isHTMLElement from './isHTMLElement';
import animateTransition from './animateTransition';
import generateRandomNumber from './generateRandomNumber';
import generateColorChannel from './generateColorChannel';
import generateColor from './generateColor';

const capitalize = (str: string): string => `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;

export {
  drawElement,
  capitalize,
  generateRandomNumber,
  generateColorChannel,
  generateColor,
  isHTMLElement,
  animateTransition,
};
