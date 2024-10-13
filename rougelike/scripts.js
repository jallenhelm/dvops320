document.addEventListener("DOMContentLoaded", () => {
  // Character JSON data
  const jsonFilePath = "./rougelike/character.json"; // Update path based on where your file is

  const characterData = fetch(jsonFilePath)
    .then((response) => response.json())
    .then((characterData) => displayCharacterData(characterData))
    .catch((error) => console.error("Error loading JSON:", error));

    console.log(characterData)

  // Function to display character data
function displayCharacterData() {
  const character = characterData.character;
  const characterDisplay = document.getElementById("characterDisplay");

  // Create HTML structure for displaying the character
  let html = `
    <div class="character-info">
      <div class="character-details">
        <h3>Name: ${character.name}</h3>
        <p>Race: ${character.race}</p>
        <p>Class: ${character.class}</p>
      </div>
      <div class="character-image">
        <img src="${character.profile_img}" alt="${character.name} Image" />
      </div>
    </div>
    <h4>Stats:</h4>
    <ul>
        <li>HP: ${character.stats.hp}</li>
        <li>Strength: ${character.stats.str}</li>
        <li>Dexterity: ${character.stats.dex}</li>
        <li>Vitality: ${character.stats.vit}</li>
    </ul>
    <h4>Equipment:</h4>
    <ul>
        <li>Right Hand: ${
          character.equipment.rightHand.itemName || "Empty"
        } (Damage: ${character.equipment.rightHand.damage || "N/A"})</li>
        <li>Left Hand: ${
          character.equipment.leftHand.itemName || "Empty"
        } (Defense: ${character.equipment.leftHand.defense || "N/A"})</li>
        <li>Head: ${character.equipment.head.itemName || "Empty"} (Defense: ${
    character.equipment.head.defense || "N/A"
  })</li>
        <li>Chest: ${character.equipment.chest.itemName || "Empty"} (Defense: ${
    character.equipment.chest.defense
  })</li>
        <li>Back: ${character.equipment.back.itemName || "Empty"} (Defense: ${
    character.equipment.back.defense || "N/A"
  })</li>
        <li>Legs: ${character.equipment.legs.itemName || "Empty"} (Defense: ${
    character.equipment.legs.defense
  })</li>
        <li>Boots: ${character.equipment.boots.itemName || "Empty"} (Defense: ${
    character.equipment.boots.defense || "N/A"
  })</li>
    </ul>
  `;

  // Inject HTML into the page
  characterDisplay.innerHTML = html;
}

  // Call the function to display character data
  displayCharacterData();
});
