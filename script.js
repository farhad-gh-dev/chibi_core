// Theme toggle functionality
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector(
    ".theme-toggle .theme-toggle__input"
  );
  const bodyElement = document.documentElement;

  if (bodyElement.classList.contains("dark")) {
    themeToggle.checked = false;
  } else {
    themeToggle.checked = true;
  }

  themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
      bodyElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      bodyElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
});
