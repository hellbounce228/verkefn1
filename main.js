"use strict";

const linksToggle = document.querySelector(".links-toggle");
const links = document.querySelector("#links");

linksToggle.addEventListener("click", () => {
  const isExpanded = linksToggle.getAttribute("aria-expanded") === "true";
  linksToggle.setAttribute("aria-expanded", String(!isExpanded));
  linksToggle.textContent = isExpanded ? "Show my links" : "Hide my links";
  links.hidden = isExpanded;
});
