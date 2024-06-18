const ageCalc = document.getElementById("age-calculator");

// error UI
const errorElements = ageCalc.querySelectorAll('[id^="error_"]');

//result UI
const resultElements = ageCalc.querySelectorAll(
  '[id^="result_"] > span:first-child'
);

export function clearErrorsNStates() {
  //remove .error class
  errorElements.forEach((element) => {
    element.innerText = "";
    element.previousElementSibling.classList.remove("error");
  });

  //update result text with default
  resultElements.forEach((element, index) =>
    index == 0 ? (element.innerText = "----") : (element.innerText = "--")
  );
}

export function displayError(errors) {
  for (let key in errors) {
    //display error
    ageCalc.querySelector(`#error_${key}`).innerHTML = errors[key];

    //add error class in label element
    ageCalc
      .querySelector(`#error_${key}`)
      .previousElementSibling.classList.add("error");
  }
}

//cursor in day input field
(function () {
  const dayInput = ageCalc.querySelector("#day");
  dayInput.focus();
})();
