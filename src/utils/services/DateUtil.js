export const getMonth = (month) => {
  let months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7:"July",
    8:"August",
    9:"September",
    10:"October",
    11: "November",
    12:"December"
  };
  return (months[month]);
}

export const daysInMonth = (current) => {
  return new Date(current.getFullYear(), current.getMonth()+1, 0).getDate();
}

export const weekCount = (year, month) => {
  let firstOfMonth = new Date(year, month-1, 1);
  let lastOfMonth = new Date(year, month, 0);

  let weekCheck = firstOfMonth.getDay() + lastOfMonth.getDate();

  return Math.ceil( weekCheck / 7);
}