export function clearErrorsNStates() {
  const ageCalc = document.getElementById("age-calculator");
  const ageResult = document.getElementById("result");

  const errorElements = ageCalc.querySelectorAll('[id^="error_"]');
  const resultElements = ageResult.querySelectorAll(
    '[id^="result_"] > span:first-child'
  );

  errorElements.forEach((element) => {
    element.innerText = "";
    element.previousElementSibling.classList.remove("error");
  });

  resultElements.forEach((element, index) =>
    index == 0 ? (element.innerText = "----") : (element.innerText = "--")
  );
}

export function displayError(errors) {
  for (let key in errors) {
    document.getElementById(`error_${key}`).innerHTML = errors[key];
    document
      .getElementById(`error_${key}`)
      .previousElementSibling.classList.add("error");
  }
}
