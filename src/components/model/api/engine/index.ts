import { Engine, IDrive, IEngine } from 'types';
import startStopDrive from './startStopDrive';

const { start, stop, drive } = Engine;

const startEngine = (
  id: number,
  signal?: AbortSignal,
): Promise<IEngine> => startStopDrive<IEngine>(id, start, signal);

const stopEngine = (
  id: number,
  signal?: AbortSignal,
): Promise<IEngine> => startStopDrive<IEngine>(id, stop, signal);

const goDrive = (
  id: number,
  signal: AbortSignal,
): Promise<IDrive> => startStopDrive<IDrive>(id, drive, signal);

export {
  startEngine,
  stopEngine,
  goDrive,
};
