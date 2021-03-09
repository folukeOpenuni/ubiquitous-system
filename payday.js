function checkPayday (date) {
  
  date.setDate(date.getMonth() === 12 ? 14 : 27);

  if (new Date() > date) {
    date.setMonth(date.getMonth() + 1); 
  }

  if (date.getDay() === 0) {
    date.setDate(26);
  }

  if (date.getDay() === 6) {
    date.setDate(25);
  }

  return [date, date === new Date()];
};

module.exports = checkPayday;
