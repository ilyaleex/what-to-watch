import {AuthorizationStatus} from '../const';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const MINUTES_IN_HOUR = 60;

export const humanizeRuntime = (runtime: number) => {
  const hours = ~~(runtime / MINUTES_IN_HOUR);
  const minutes = runtime % MINUTES_IN_HOUR;

  return `${hours}h ${minutes}m`;
};

export const isCheckedAuth = (authorizationStatus: string): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

const ONE_HOUR = 360;

enum DurationTemplate {
  MinutesSeconds = 'm[:]s',
  HoursMinutesSeconds = 'H[:] m[:]s',
  HoursMinutes = 'H[h] m[m]'
}

const RatingName = [
  {
    min: 0,
    max: 3,
    name: 'Bad',
  },
  {
    min: 3,
    max: 5,
    name: 'Normal',
  },
  {
    min: 5,
    max: 8,
    name: 'Good',
  },
  {
    min: 8,
    max: 10,
    name: 'Very Good',
  },
  {
    min: 10,
    name: 'Awesome',
  }
];

export const formattingDuration = (runtime: number) => {
  const timeDuration = dayjs.duration(runtime, 'minutes');
  return timeDuration.format(DurationTemplate.HoursMinutes);
};

export const formattingLastTime = (runtime: number) => {
  const timeDuration = dayjs.duration(runtime, 'seconds');

  if ((runtime / ONE_HOUR) < 1) {
    return timeDuration.format(DurationTemplate.MinutesSeconds);
  }

  return timeDuration.format(DurationTemplate.HoursMinutesSeconds);
};

export const getRatingName = (rating: number) => {
  for (const item of RatingName) {
    if (!item.max) {
      return item.name;
    }

    if (rating >= item.min && rating < item.max) {
      return item.name;
    }
  }
};
