"use strict";

const linksToggle = document.querySelector(".links-toggle");
const links = document.querySelector("#links");
const themeToggle = document.querySelector(".theme-toggle");

linksToggle.addEventListener("click", () => {
  const isExpanded = linksToggle.getAttribute("aria-expanded") === "true";
  linksToggle.setAttribute("aria-expanded", String(!isExpanded));
  linksToggle.textContent = isExpanded ? "Show my links" : "Hide my links";
  links.hidden = isExpanded;
});

themeToggle.addEventListener("click", () => {
  const isNightMode = document.body.classList.toggle("night-mode");
  themeToggle.setAttribute("aria-pressed", String(isNightMode));
  themeToggle.textContent = isNightMode ? "Day mode" : "Night mode";
});
