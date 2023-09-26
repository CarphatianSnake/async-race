import { Engine, IEngine, IDrive } from 'types';
import ApiError from 'controller/errors';
import useHttp from '../useHttp';

const startStopDrive = async <T extends IEngine | IDrive>(
  id: number,
  status: Engine,
  abortSignal?: AbortSignal,
): Promise<T> => {
  const query = `engine?id=${id}&status=${status}`;

  const options: {
    method: 'PATCH',
    signal?: AbortSignal,
  } = {
    method: 'PATCH',
  };

  if (abortSignal) {
    options.signal = abortSignal;
  }

  return useHttp(query, options)
    .then((response) => {
      if (response.status === 500 && status === Engine.drive) {
        throw new ApiError('Engine broken', response.status, response.statusText);
      }
      return response.json();
    });
};

export default startStopDrive;
