document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".reveal-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const answer = btn.nextElementSibling;
      if (answer.style.display === "block") {
        answer.style.display = "none";
      } else {
        answer.style.display = "block";
      }
    });
  });
});
