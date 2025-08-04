import { format, isToday, isYesterday } from 'date-fns';

function formatDate(isoString: string): string {
  const date = new Date(isoString);

  if (isToday(date)) {
    return `Today, ${format(date, 'HH:mm')}`;
  } else if (isYesterday(date)) {
    return `Yesterday, ${format(date, 'HH:mm')}`;
  } else {
    return format(date, 'MMM d, HH:mm');
  }
}

export { formatDate };
