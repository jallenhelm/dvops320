// Basic script for adding interactivity to the card game

document.addEventListener("DOMContentLoaded", function () {

  // Set random backgrounds
  const totalBackgrounds = 4; // Number of background options
  const randomBgNumber = Math.floor(Math.random() * totalBackgrounds) + 1; // Randomly select 1-4
  const bgFolderPath = `src/assets/background-${randomBgNumber}`; // Build the folder path

  // Update each layer's background image path
  document.querySelector(
    ".layer1"
  ).style.backgroundImage = `url('${bgFolderPath}/Plan-5.png')`;
  document.querySelector(
    ".layer2"
  ).style.backgroundImage = `url('${bgFolderPath}/Plan-4.png')`;
  document.querySelector(
    ".layer3"
  ).style.backgroundImage = `url('${bgFolderPath}/Plan-3.png')`;
  document.querySelector(
    ".layer4"
  ).style.backgroundImage = `url('${bgFolderPath}/Plan-2.png')`;
  document.querySelector(
    ".layer5"
  ).style.backgroundImage = `url('${bgFolderPath}/Plan-1.png')`;
});

// Call the function on page load
window.onload = function () {
  setRandomBackgrounds();
};
