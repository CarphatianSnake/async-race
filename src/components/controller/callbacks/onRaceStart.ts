import garage from 'view/main/tab/garage';
import { createWinner, getWinner, updateWinner } from 'model/api';
import { IWinner } from 'types';
import showWinnerModal from 'view/winnerModal';
import onCarStart from './onCarStart';

function onRaceStart(): Promise<void> {
  const { carsList } = garage;

  return Promise.any(carsList.items.map((car) => onCarStart(car)))
    .then((raceResult) => {
      if (raceResult && raceResult.time) {
        showWinnerModal(raceResult);

        return getWinner(raceResult.id)
          .then((winnerData) => {
            if (winnerData && raceResult.time) {
              const winner: Omit<IWinner, 'id'> = {
                wins: winnerData.wins + 1,
                time: winnerData.time > raceResult.time ? raceResult.time : winnerData.time,
              };
              return updateWinner(raceResult.id, winner);
            }
            return undefined;
          })
          .catch((error) => {
            if (error.status === 404 && raceResult.time) {
              const winner: IWinner = {
                id: raceResult.id,
                time: raceResult.time,
                wins: 1,
              };
              return createWinner(winner);
            }
            return undefined;
          });
      }
      return undefined;
    });
}

export default onRaceStart;
