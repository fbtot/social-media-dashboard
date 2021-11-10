const bodyEl = document.getElementsByTagName("body")[0];
// https://ourcodeworld.com/articles/read/1114/how-to-detect-if-the-user-prefers-a-light-or-dark-color-schema-in-the-browser-with-javascript-and-css
const userPrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
const userPrefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;

if (userPrefersDark || userPrefersLight) {
  bodyEl.classList.add("prefers-color-scheme");
}
