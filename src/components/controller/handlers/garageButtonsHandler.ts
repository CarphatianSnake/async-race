import garage from 'view/main/tab/garage';
import winners from 'view/main/tab/winners';
import { onRaceStart, onGenerateCars, onResetRace } from 'controller/callbacks';
import { isHTMLElement } from 'utils';

function garageButtonsHandler(): void {
  garage.garageButtons.addEventListener('click', (e) => {
    const { target } = e;

    if (isHTMLElement(target)) {
      if (target.classList.contains('start-race-button') && garage.carsList.items.length) {
        onRaceStart()
          .then(() => winners.update());
      }
      if (target.classList.contains('generate-cars-button')) {
        onGenerateCars();
      }
      if (target.classList.contains('reset-race-button')) {
        onResetRace();
      }
    }
  });
}

export default garageButtonsHandler;
