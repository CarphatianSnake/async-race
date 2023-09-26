import generateColorChannel from './generateColorChannel';

function generateColor(): string {
  const red = generateColorChannel();
  const green = generateColorChannel();
  const blue = generateColorChannel();
  return `#${red}${green}${blue}`;
}

export default generateColor;
