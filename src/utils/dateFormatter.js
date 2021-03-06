import moment from 'moment';

const formattedDate = (date, format) => {
  if (format) {
    return moment(date, format).format('DD/MM/YYYY');
  }
  return moment(date).format('DD/MM/YYYY');
}

export { formattedDate };
