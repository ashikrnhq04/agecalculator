export function checkError(formData) {
  const errors = {};

  const { day, month, year } = formData;

  if (validateDate(day, month, year)) {
    //month is ahead of current month and the year is equal to current
    if (month > new Date().getMonth() + 1 && year == new Date().getFullYear())
      errors.month = "The month is out of current month";

    //year is before 1
    if (year < 1 || !/^\d{4}$/.test(year.toString())) {
      errors.year = "Must be a valid year";
    }

    //year is ahead of the current year
    if (year > new Date().getFullYear()) errors.year = "Must be in the past";
  } else {
    //no value for the day or out of valid range
    if (!day) {
      errors.day = "Day is required!";
    } else if (
      day < 1 ||
      day > 31 ||
      (day > new Date().getDate() &&
        month == new Date().getMonth() + 1 &&
        year == new Date().getFullYear())
    )
      errors.day = "Must be a valid day";

    // no value for month or out of valid range
    if (!month) {
      errors.month = "Month is required!";
    } else if (month < 1 || month > 12) errors.month = "Must be a valid month";
    // errors.date = "Invalid Date";

    // no value for year
    if (!year) {
      errors.year = "Year is required!";
    }

    //invalid year input
    if (!/^\d{4}$/.test(year.toString())) {
      errors.year = "Must be a valid year";
    }
  }

  return errors;
}

export function validateDate(day, month, year) {
  const date = new Date(year, month - 1, day);

  const isValid =
    date.getFullYear() == year &&
    date.getMonth() == month - 1 &&
    date.getDate() == day;

  return isValid;
}

export function getAge(bornDate) {
  const currentDate = new Date();

  // age in year
  let year = currentDate.getFullYear() - bornDate.getFullYear();

  //month
  let month = currentDate.getMonth() - bornDate.getMonth();

  //day
  let day = currentDate.getDate() - bornDate.getDate();

  // Adjust negative
  if (day < 0) {
    // previous month's days to adjust the days
    month--;
    const previousMonth = (currentDate.getMonth() - 1 + 12) % 12;
    const daysInPreviousMonth = new Date(
      currentDate.getFullYear(),
      previousMonth + 1,
      0
    ).getDate();
    day += daysInPreviousMonth;
  }

  // Adjust for months
  if (month < 0) {
    year--;
    month += 12;
  }

  return { year, month, day };
}

export function printAge(age) {
  const result = document.getElementById("result");

  for (let key in age) {
    result.querySelector(`#result_${key}>span`).innerHTML = age[key];

    result.querySelector(`.prefix_${key}`).innerHTML =
      age[key] > 1 ? `${key}s` : key;
  }
}
