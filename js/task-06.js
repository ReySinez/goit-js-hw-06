const inputElement = document.getElementById('validation-input');

inputElement.addEventListener('blur', function() {
  const inputValue = inputElement.value;
  const expectedLength = inputElement.getAttribute('data-length');
  
  if (inputValue.length === parseInt(expectedLength)) {
    inputElement.classList.remove('invalid');
    inputElement.classList.add('valid');
  } else {
    inputElement.classList.remove('valid');
    inputElement.classList.add('invalid');
  }
});