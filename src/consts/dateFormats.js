const hourFormat = 'HH';
const minuteFormat = 'mm';
const dayFormat = 'dd';
const monthFormat = 'MM';
const yearFormat = 'yyyy';

const datetimeFormat = `${dayFormat}-${monthFormat}-${yearFormat}, ${hourFormat}:${minuteFormat}`;
const dateFormat = `${dayFormat}-${monthFormat}-${yearFormat}`;
const timeFormat = `${hourFormat}:${minuteFormat}`;

export { hourFormat, minuteFormat, dateFormat, datetimeFormat, timeFormat };
