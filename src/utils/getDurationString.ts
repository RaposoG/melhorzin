import { intervalToDuration, parseISO, formatDuration } from 'date-fns';

export const getDurationString = (startDate: string, endDate?: string) => {
  const interval = {
    start: parseISO(startDate),
    end: endDate ? parseISO(endDate) : new Date()
  };
  const durationObj = intervalToDuration(interval);
  const { years, months } = durationObj;

  if (!years && !months) throw new Error('Duration < 1 month');

  const duration = formatDuration(
    {
      years,
      months
    },
    { format: ['years', 'months'] }
  );

  return duration;
};
