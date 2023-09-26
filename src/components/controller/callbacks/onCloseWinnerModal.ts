import { isHTMLElement, animateTransition } from 'utils';

function onCloseWinnerModal(e: MouseEvent): void {
  const { target, currentTarget } = e;
  if (isHTMLElement(target) && isHTMLElement(currentTarget)) {
    const isCloseButton = target.classList.contains('modal-close-button');
    if (target === currentTarget || isCloseButton) {
      animateTransition(currentTarget, () => {
        currentTarget.remove();
        document.body.removeAttribute('style');
      });
    }
    currentTarget.removeEventListener('click', onCloseWinnerModal);
  }
}

export default onCloseWinnerModal;
