// Config for ore stats and variables
import { oresConfig } from "./config.js";

// Initial game state
let money = 0;
const oreStats = [
  { collected: 0, level: 1, progress: 0, isUnlocked: true }, // Ore 1 is unlocked by default
  { collected: 0, level: 1, progress: 0, isUnlocked: true }, // Ore 2 locked initially
  { collected: 0, level: 1, progress: 0, isUnlocked: true }, // Ore 3 locked initially
  { collected: 0, level: 1, progress: 0, isUnlocked: true }, // Ore 4 locked initially
];

// Initialize game
document.addEventListener("DOMContentLoaded", function () {
  // Set random backgrounds
  const totalBackgrounds = 4; // Number of background options
  const randomBgNumber = Math.floor(Math.random() * totalBackgrounds) + 1; // Randomly select 1-4
  const bgFolderPath = `src/assets/cave-backgrounds/background-${randomBgNumber}`; // Build the folder path

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

  // Call the function on page load
  window.onload = function () {
    setRandomBackgrounds();
  };

  const sellButton = document.getElementById("sell-all");
  sellButton.addEventListener("click", sellAllOres);

  oresConfig.forEach((ore, index) => {
    if (index === 0) {
      // Start mining the first ore
      mineOre(index);
    }

    const lvlUpBtn = document.getElementById(`ore${index + 1}-lvl-up`);

    // Add event to level up or unlock ore
    lvlUpBtn.addEventListener("click", () => {
      if (!oreStats[index].isUnlocked) {
        unlockOre(index); // If not unlocked, it becomes an unlock button
      } else {
        levelUpOre(index); // If unlocked, it's a level-up button
      }
    });

    // Update the UI for locked/unlocked state on load
    updateUI(index);
  });
});

// Mining logic for ores
function mineOre(oreIndex) {
  const ore = oreStats[oreIndex];
  const progressBar = document.getElementById(`ore${oreIndex + 1}-progress`);

  // Ore collection interval
  setInterval(() => {
    if (ore.isUnlocked) {
      ore.progress += oresConfig[oreIndex].baseSpeed * ore.level;

      // If progress reaches or exceeds 100%, reset it and collect ore
      if (ore.progress >= 100) {
        ore.collected += oresConfig[oreIndex].baseValue;
        ore.progress = 0; // Reset progress
      }

      // Update the progress bar width continuously
      progressBar.style.width = `${ore.progress}%`;

      // Call the UI update function to refresh collected ores and level-up cost
      updateUI(oreIndex);
    }
  }, 10); // Adjust interval time for mining speed
}

// Unlock ore
function unlockOre(oreIndex) {
  const ore = oreStats[oreIndex];
  const unlockCost = oresConfig[oreIndex].levelCost; // Initial cost to unlock

  if (money >= unlockCost) {
    money -= unlockCost;
    ore.isUnlocked = true;
    ore.level = 1; // Set the level to 1 once unlocked
    updateUI(oreIndex); // Update UI to show level-up button
    document.getElementById(`ore${oreIndex + 1}-lvl-up`).className == "Unlocked";
  } else {
    alert("Not enough money to unlock this ore!");
  }
}

// Level up ore speed
function levelUpOre(oreIndex) {
  const ore = oreStats[oreIndex];
  const cost = oresConfig[oreIndex].levelCost * ore.level;

  if (money >= cost) {
    money -= cost;
    ore.level++;
    updateUI(oreIndex);
  } else {
    alert("Not enough money to level up!");
  }
}

// Sell all ores for money
function sellAllOres() {
  oreStats.forEach((ore, index) => {
    money += ore.collected * oresConfig[index].baseValue;
    ore.collected = 0;
    updateAllOresUI();
  });

  updateMoney();
}

// Update UI
function updateUI(oreIndex) {
  const ore = oreStats[oreIndex];
  const oreContainer = document.getElementById(`ore-${oreIndex + 1}`);
  const lvlUpBtn = document.getElementById(`ore${oreIndex + 1}-lvl-up`);
  const lvlUpCostText = document.getElementById(
    `ore${oreIndex + 1}-lvl-up-cost`
  );

  // Only update the UI if the ore has been unlocked
  if (ore.isUnlocked) {
    oreContainer.classList.remove("locked");

    // Check if the level-up button and cost text exist
    if (lvlUpCostText) {
      lvlUpCostText.innerText = oresConfig[oreIndex].levelCost * ore.level;
    } else {
      console.warn(`Element for ore${oreIndex + 1} level-up cost not found.`);
    }

    lvlUpBtn.innerText = `Level Up (Cost: ${
      oresConfig[oreIndex].levelCost * ore.level
    })`;
    lvlUpBtn.classList.remove("unlock");

    // Update progress bar
    const progressBar = document.getElementById(`ore${oreIndex + 1}-progress`);
    if (progressBar) {
      progressBar.style.width = `${ore.progress}%`;
    }

    // Update collected count for the ore
    const collectedText = document.getElementById(
      `ore${oreIndex + 1}-collected`
    );
    if (collectedText) {
      collectedText.innerText = ore.collected; // Update the collected count
    } else {
      console.warn(`Element for ore${oreIndex + 1} collected count not found.`);
    }
  } else {
    // If the ore is locked, display unlock cost
    lvlUpBtn.innerText = `Unlock (Cost: ${oresConfig[oreIndex].levelCost})`;
    lvlUpBtn.classList.add("unlock");
  }

  // Update money display
  updateMoney();
}

function updateAllOresUI() {
  for (let i = 0; i < oreStats.length; i++) {
    updateUI(i); // Call updateUI for each ore by passing its index
  }
}



// Update money UI
function updateMoney() {
  document.getElementById("money").innerText = money;
}
