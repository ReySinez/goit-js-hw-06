const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = Object.fromEntries(new FormData(loginForm));

  if (!formData.email || !formData.password) {
    alert('Please fill in all fields.');
  } else {
    console.log(formData);

    loginForm.reset();
  }
});
