// Show preview feedback when the contact form is submitted.
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

if (contactForm && contactMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    contactMessage.textContent =
      "This is a layout preview only. Your message has not been sent.";
  });
}
