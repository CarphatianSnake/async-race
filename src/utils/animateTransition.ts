const ANIMATION_TIMEOUT = 150;

function animateTransition<T extends HTMLElement>(element: T, callback: () => void): void {
  element.classList.add('opacity-zero');
  setTimeout(() => {
    callback();
    element.classList.remove('opacity-zero');
  }, ANIMATION_TIMEOUT);
}

export default animateTransition;
