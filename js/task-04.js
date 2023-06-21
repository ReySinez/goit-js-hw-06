const counterValue = document.querySelector("#value");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

let count = 0;

const updateCounterValue = () => {
  counterValue.textContent = count;
};

const increment = () => {
  count += 1;
  updateCounterValue();
};

const decrement = () => {
  count -= 1;
  updateCounterValue();
};

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);