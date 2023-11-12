"use strict";

import { valveHeadings, valves, numbers } from "./data.js";

const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("keydown", handleEnterKey, false);

const inputButton = document.querySelector(".input-button");
inputButton.addEventListener("click", updateContent, false);
inputButton.addEventListener("click", animateButton, false);

const valveContainer = document.querySelector(".valve-container");
const valveNumber = document.querySelector(".valve-number");
const valveTextHeadings = document.querySelectorAll(".valve-text-heading");
const valveImageWrapper = document.querySelector(".img-wrapper");

const valvePhoto = document.querySelector(".valve-photo");
valvePhoto.addEventListener("load", loadOnCompletePhoto, false);

const valveLocation = document.querySelector(".valve-location");
const valveUse = document.querySelector(".valve-use");
const valveType = document.querySelector(".valve-type");
const valveShutdownReason = document.querySelector(".valve-shutdown-reason");
const valveImportance = document.querySelector(".valve-importance");

// Content manipulation
async function updateContent() {
  try {
    if (
      !searchInput.value ||
      valveNumber.textContent === searchInput.value.toUpperCase()
    )
      return;

    valveContainer.style.visibility = "revert";

    valveContainer.classList.add("valve-container_theme-1column");
    toggleLoadingPlaceholder(valveImageWrapper, valvePhoto);
    clearInfoText();

    const valve = searchItem(valves);
    if (!valve) {
      const fetchedKittyImage = await fetch(`resources/saddy-kitty.jpg`);
      valvePhoto.src = fetchedKittyImage.url;
      return;
    }

    const fetchedValvePhoto = await fetch(`valves/${valve.number}-min.jpg`);
    valvePhoto.src = fetchedValvePhoto.url;

    return true;
  } catch (err) {
    return err;
  }
}
function loadOnCompletePhoto() {
  toggleLoadingPlaceholder(valveImageWrapper, valvePhoto);
  valveContainer.classList.remove("valve-container_theme-1column");

  const valve = searchItem(valves);
  if (!valve) {
    valveNumber.classList.add("valve-number_theme-small");
    clearInfoText();
    valveNumber.textContent =
      "Такой клапан не существует либо ещё не был добавлен";
    return;
  }

  valveNumber.classList.remove("valve-number_theme-small");
  addInfoText(valve);
}
function searchItem(array) {
  const inputValue = searchInput.value.toUpperCase();
  const valve = array.find((valve) => valve.number === inputValue);
  return valve;
}
function clearInfoText() {
  valveNumber.textContent = ``;
  for (let i = 0; i < valveTextHeadings.length; i++)
    valveTextHeadings[i].textContent = ``;

  [
    valveLocation,
    valveUse,
    valveType,
    valveShutdownReason,
    valveImportance,
  ].forEach((valveParagraph) => (valveParagraph.textContent = ``));
}
function addInfoText(object) {
  valveNumber.textContent = object.number;
  for (let i = 0; i < valveTextHeadings.length; i++)
    valveTextHeadings[i].textContent = valveHeadings[i];
  valveLocation.textContent = `${object.location}`;
  valveUse.textContent = `${object.use}`;
  valveType.textContent = `${object.type}`;
  valveShutdownReason.textContent = `${object.shutdownReason}`;
  object.important
    ? (valveImportance.textContent = `Является средством автоматики, используемом по ПМЛА`)
    : (valveImportance.textContent = ``);
}

// Making the app feel better
function toggleLoadingPlaceholder(wrapper, child) {
  if (wrapper.classList.contains("img-wrapper_theme-loading")) {
    wrapper.classList.remove("img-wrapper_theme-loading");
    child.classList.remove("valve-photo_theme-loading");
  } else {
    wrapper.classList.add("img-wrapper_theme-loading");
    child.classList.add("valve-photo_theme-loading");
  }
}
function handleEnterKey(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    updateContent();
  }
}

// DATALIST GENERATION
function generateDatalistFromArray(array, listId) {
  const datalist = document.createElement("datalist");
  datalist.id = listId;

  for (const element of array) {
    const option = document.createElement("option");
    option.value = element;
    datalist.appendChild(option);
  }
  return datalist;
}
const datalist = generateDatalistFromArray(numbers, "valves");
searchInput.after(datalist);

// Button animation function
function animateButton(e) {
  e.preventDefault();
  //reset animation
  e.target.classList.remove("animate");
  e.target.classList.add("animate");
  setTimeout(() => e.target.classList.remove("animate"), 700);
}
