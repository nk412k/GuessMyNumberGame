export const getGuessNumber = (
  min: number,
  max: number,
  skipNumber: number
): number => {
  const number = Math.floor(Math.random() * (max - min) + min);
  if (number === skipNumber) {
    return getGuessNumber(min, max, skipNumber);
  }
  return number;
};
