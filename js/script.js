const bodyEl = document.getElementsByTagName("body")[0];
const themeToggleLeft = document.getElementById("theme-toggle--left");
const themeToggleCenter = document.getElementById("theme-toggle--center");
const themeToggleRight = document.getElementById("theme-toggle--right");
const themeClasses = {
  "thtme-toggle--left": "dark-theme",
  "theme-toggle--right": "light-theme",
};

// https://ourcodeworld.com/articles/read/1114/how-to-detect-if-the-user-prefers-a-light-or-dark-color-schema-in-the-browser-with-javascript-and-css
const userPrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
const userPrefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
