const hourFormat = 'HH';
const minuteFormat = 'mm';
const dayFormat = 'dd';
const monthFormat = 'MM';
const yearFormat = 'yyyy';
const weekdayIndexFormat = 'i';
const monthDayFormat = 'do';

const datetimeFormat = `${dayFormat}-${monthFormat}-${yearFormat}, ${hourFormat}:${minuteFormat}`;
const dateFormat = `${dayFormat}-${monthFormat}-${yearFormat}`;
const timeFormat = `${hourFormat}:${minuteFormat}`;
const weekIdentifierDateFormat = `${yearFormat}-${monthFormat}-${dayFormat}`;

export {
  hourFormat,
  minuteFormat,
  dateFormat,
  datetimeFormat,
  timeFormat,
  weekdayIndexFormat,
  monthDayFormat,
  weekIdentifierDateFormat,
};
