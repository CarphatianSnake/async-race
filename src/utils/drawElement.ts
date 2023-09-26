import { DrawElement } from 'types';

const drawElement: DrawElement = ({
  tag,
  classList,
  attributes,
  innerText,
}) => {
  const element = document.createElement(tag);

  if (classList) {
    if (Array.isArray(classList)) {
      element.classList.add(...classList);
    } else {
      element.classList.add(classList);
    }
  }

  if (attributes) {
    Object.entries(attributes).forEach((item) => {
      element.setAttribute(item[0], item[1]);
    });
  }

  if (innerText) {
    element.innerText = innerText;
  }

  return element;
};

export default drawElement;
