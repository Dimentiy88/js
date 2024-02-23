const btnAdd = document.querySelector("button[data-add]");
const valueInput = document.querySelector("input[data-value]");
const btnReset = document.querySelector("button[data-reset]");
const outputEl = document.querySelector(".js-output span");

let total = 0;

btnAdd.addEventListener("click", () => {
  const value = Number(valueInput.value);
  total += value;
  console.log("total: ", total);
  outputEl.textContent = total;
  valueInput.value = "";
});

btnReset.addEventListener("click", function () {
  total = 0;
  outputEl.textContent = total;
});
