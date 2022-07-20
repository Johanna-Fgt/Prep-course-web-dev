//Open the navigation
function myFunction() {
    document.getElementById("navigation").classList.toggle("open");
  }

// Contact Form
const message =
  "Thank you for submitting your message to the Argo ship. Jason and his crew will respond shortly.";

document.getElementById("contact").addEventListener("submit", (e) => {
  e.preventDefault();
  alert(message);
});
