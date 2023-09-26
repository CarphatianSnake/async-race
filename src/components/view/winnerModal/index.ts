import { onCloseWinnerModal } from 'src/components/controller/callbacks';
import { drawElement } from 'utils';
import { IRaceResult } from 'types';
import './winnerModal.scss';

function showWinnerModal(data: IRaceResult): void {
  const text = `The winner is ${data.name} with time ${data.time} seconds!`;
  const modalWrapper = drawElement({ tag: 'div', classList: ['modal-wrapper', 'opacity-zero'] });
  const modalWindow = drawElement({ tag: 'div', classList: 'modal-window' });
  const modalText = drawElement({ tag: 'p', classList: 'modal-text', innerText: text });
  const modalCloseButton = drawElement({ tag: 'button', classList: 'modal-close-button', innerText: 'Close' });

  modalWindow.append(modalText, modalCloseButton);

  modalWrapper.append(modalWindow);

  document.body.append(modalWrapper);
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    modalWrapper.classList.remove('opacity-zero');
  }, 16);

  modalWrapper.addEventListener('click', onCloseWinnerModal);
}

export default showWinnerModal;
