function generateRandomNumber(limit: number): number {
  return Math.floor(Math.random() * (limit + 1));
}

export default generateRandomNumber;
