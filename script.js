document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById("year");

  if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
  }

  const form = document.querySelector(".contact-form");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const button = form.querySelector("button");
      const originalText = button.textContent;

      button.textContent = "Mensagem enviada!";
      button.disabled = true;

      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        form.reset();
      }, 2000);
    });
  }
});
