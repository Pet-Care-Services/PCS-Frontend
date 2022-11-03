import { isNil, map, mapValues, split } from 'lodash';

const API_DATERANGE_SEPARATOR = '/';

export default (apiWeekAvailability, dateFrom) => {
  const isApiDataPresent = !isNil(apiWeekAvailability);
  const { dateRange, ...weekdaysData } = apiWeekAvailability || {};

  let daysAvailabilities;

  if (isApiDataPresent) {
    daysAvailabilities = {
      ...mapValues(weekdaysData, (dateRangeStringList) => {
        return map(dateRangeStringList, (dateRangeString) => {
          const [from, to] = split(dateRangeString, API_DATERANGE_SEPARATOR);
          return { from: new Date(from), to: new Date(to) };
        });
      }),
    };
  }

  return {
    dateFrom:
      dateFrom || new Date(split(dateRange, API_DATERANGE_SEPARATOR)[0]),
    daysAvailabilities,
  };
};
