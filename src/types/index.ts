export interface IAttributes {
  [key: string]: string
}

export interface IDrawElementProps<T> {
  tag: T;
  classList?: string | string[];
  attributes?: IAttributes;
  innerText?: string;
}

export type DrawElement = <K extends keyof HTMLElementTagNameMap>(
  props: IDrawElementProps<K>,
) => HTMLElementTagNameMap[K];

export enum Tabs {
  garage = 'garage',
  winners = 'winners',
}

export interface ICar {
  name: string;
  color: string;
  id: number;
}

export interface IWinner {
  time: number;
  wins: number;
  id: number;
}

export interface IDrive {
  success: boolean;
}

export interface IEngine {
  velocity: number;
  distance: number;
}

export type BodyData = Omit<ICar, 'id'> | IWinner | Omit<IWinner, 'id'>;

export interface IParams {
  page: number;
  limit: 7 | 10;
}

export interface IWinnersParams extends IParams, ISort {}

export enum WinnersHeadings {
  number = 'number',
  car = 'car',
  name = 'name',
  wins = 'wins',
  time = 'time',
}

export enum SortTypes {
  id = 'id',
  wins = WinnersHeadings.wins,
  time = WinnersHeadings.time,
}

export enum OrderTypes {
  asc = 'ASC',
  desc = 'DESC',
}

export interface ISort {
  sort: SortTypes;
  order: OrderTypes;
}

interface ITabData extends IParams {
  pages: number;
  items: number;
}

export interface IGarage extends ITabData {
  data: ICar[];
}

export type WinnerData = (IWinner & Partial<Omit<ICar, 'id'>>);

export interface IWinners extends ITabData, ISort {
  data: WinnerData[];
}

export enum Engine {
  start = 'started',
  stop = 'stopped',
  drive = 'drive',
}

export enum Vendors {
  audi = 'Audi',
  bmw = 'BMW',
  skoda = 'Skoda',
  fiat = 'Fiat',
  renault = 'Renault',
  mercedes = 'Mercedes',
  nissan = 'Nissan',
  toyota = 'Toyota',
  kia = 'Kia',
  jaguar = 'Jaguar',
  ford = 'Ford',
  chevrolet = 'Chevrolet',
  vw = 'VW',
  tesla = 'Tesla',
  subaru = 'Subaru',
}

export enum Models {
  modelS = 'Model S',
  a6quattro = 'A6 Quattro',
  m5 = 'M5',
  punto = 'Punto',
  megan = 'Megan',
  gt53 = 'GT 53',
  leaf = 'Leaf',
  corolla = 'Corolla',
  impreza = 'Impreza',
  rio = 'Rio',
  fType = 'F-Type',
  focus = 'Focus',
  camarro = 'Camarro',
  passat = 'Passat',
  octavia = 'Octavia',
}

export enum PaginationButtons {
  first = 'pagination__button_first',
  prev = 'pagination__button_prev',
  next = 'pagination__button_next',
  last = 'pagination__button_last',
}

export type PaginationArrows = '>>' | '<<' | '>' | '<';

export interface IRaceResult {
  id: number;
  time: number | void;
  name: string;
}
