import generateRandomNumber from './generateRandomNumber';

function generateColorChannel(): string {
  const channel = generateRandomNumber(255);
  return channel.toString(16).padStart(2, '0');
}

export default generateColorChannel;
