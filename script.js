// Contact Form Validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();

    if (name === "" || email === "" || message === "") {
      alert("⚠️ Please fill all fields before submitting.");
    } else {
      alert("✅ Thank you! Your message has been sent.");
      form.reset();
    }
  });
});
