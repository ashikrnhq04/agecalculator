import { checkError, printAge, getAge } from "./util/age-calculator-util.js";
import { displayError, clearErrorsNStates } from "./util/ui-update.js";

const darkModeBtn = document.getElementById("#colorModeBtn");

const form = document.getElementById("age-calculator");

// age calculator main function
function handleAgeCalculatorForm(e) {
  e.preventDefault();
  clearErrorsNStates();

  const formData = Object.fromEntries(new FormData(e.currentTarget));

  const errors = checkError(formData);

  if (Object.keys(errors).length) {
    displayError(errors);
    return;
  }

  const validDate = new Date(formData.year, formData.month - 1, formData.day);
  const age = getAge(validDate);
  printAge(age);
}

form.addEventListener("submit", handleAgeCalculatorForm);

// dark mode
function darkMode() {
  document.documentElement.classList.toggle("dark");
}

darkModeBtn.addEventListener("click", darkMode);
