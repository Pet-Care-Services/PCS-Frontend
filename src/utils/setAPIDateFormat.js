import { formatISO } from 'date-fns';

export default (datetime) => formatISO(new Date(datetime));
