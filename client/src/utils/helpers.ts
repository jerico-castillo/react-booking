export const getDateInMilliseconds = (dateString: string): number => {
  const dateParts = dateString.split(".");
  const americanDateString = `${dateParts[1]}/${dateParts[0]}/${dateParts[2]}`;

  const date = new Date(americanDateString);

  return date.getTime();
};

export const dayDifference = (
  endDatInMillisecondse: number,
  startDatInMillisecondse: number
) => {
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

  const timeDiff = Math.abs(startDatInMillisecondse - endDatInMillisecondse);
  const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
  return diffDays;
};
