import { BodyData } from 'types';

const prepareOptions = (method: 'POST' | 'PUT', data: BodyData): RequestInit => ({
  method,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});

export default prepareOptions;
