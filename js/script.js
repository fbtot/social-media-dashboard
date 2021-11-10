const bodyEl = document.getElementsByTagName("body")[0];
const themeToggleLeft = document.getElementById("theme-toggle--left");
const themeToggleCenter = document.getElementById("theme-toggle--center");
const themeToggleRight = document.getElementById("theme-toggle--right");
const toggleButtons = [themeToggleCenter, themeToggleLeft, themeToggleRight];
const themesObj = {
  "theme-toggle--left": "dark-theme",
  "theme-toggle--right": "light-theme",
  "theme-toggle--center": "prefers-color-scheme",
};

// https://ourcodeworld.com/articles/read/1114/how-to-detect-if-the-user-prefers-a-light-or-dark-color-schema-in-the-browser-with-javascript-and-css
const userPrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
const userPrefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;

function updateTheme(el) {
  for (className in themesObj) {
    bodyEl.classList.remove(themesObj[className]);
  }

  bodyEl.classList.add(themesObj[el.id]);
}
updateTheme(themeToggleCenter);
toggleButtons.forEach((el) => {
  el.addEventListener("click", function () {
    updateTheme(el);
  });
});
