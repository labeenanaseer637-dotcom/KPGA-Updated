// Validate the membership form and show its preview status.
const memberRegistrationForm = document.getElementById(
  "member-registration-form",
);
const registrationFormMessage = document.getElementById(
  "registration-form-message",
);
if (memberRegistrationForm && registrationFormMessage) {
  memberRegistrationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!memberRegistrationForm.reportValidity()) return;
    registrationFormMessage.textContent =
      "Your form is complete, but online account creation is not connected yet. No information or documents were sent or saved.";
  });
}
