
const boxes = document.querySelectorAll('.custom-input-box');

boxes.forEach(box => {
  box.addEventListener('click', () => {
    box.classList.toggle('clicked');
  });
});

const form = document.getElementById("registration-form");
const submitButton = document.getElementById("submit-button");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form from submitting normally

  // Here you can add your code to handle form data and perform validation

  // Redirect user to ServeU page
  window.location.href = "serveu.html";
});
