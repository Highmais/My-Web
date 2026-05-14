const locations = [
  "Backstretch", "Barley Hopsters", "Buns", "Hamburger Inn",
  "Oak and Brazen", "Old Dog", "Opa", "Restoration",
  "Roops", "Solar Saloon", "Son of Thurmans", "Staas Brewing"
];

// Storage: one array of 10 slots per location index
const shamrockData = locations.map(() => Array(10).fill(''));

const locationSelect = document.getElementById('shamrock-location');
const list = document.getElementById('shamrock-list');

// Populate the location dropdown
locations.forEach((loc, i) => {
  const option = document.createElement('option');
  option.value = i;
  option.textContent = loc;
  locationSelect.appendChild(option);
});

// Build the 10 input rows once
for (let slot = 0; slot < 10; slot++) {
  const row = document.createElement('div');
  row.className = 'shamrock-row';
  row.innerHTML = `
    <span class="shamrock-icon">🍀</span>
    <span class="loc-name">Number ${slot + 1}</span>
    <input class="num-input" type="number" min="0" max="120" placeholder="#"
      id="slot${slot}" aria-label="Shamrock number slot ${slot + 1}">
  `;
  list.appendChild(row);
}

// Save current inputs into storage for a given location index
function saveCurrentLocation(locIdx) {
  for (let slot = 0; slot < 10; slot++) {
    shamrockData[locIdx][slot] = document.getElementById('slot' + slot).value;
  }
}

// Load stored values for a given location index into the inputs
function loadLocation(locIdx) {
  for (let slot = 0; slot < 10; slot++) {
    document.getElementById('slot' + slot).value = shamrockData[locIdx][slot];
  }
}

let currentLocIdx = 0;
loadLocation(0);

locationSelect.addEventListener('change', function () {
  saveCurrentLocation(currentLocIdx);
  currentLocIdx = parseInt(this.value);
  loadLocation(currentLocIdx);
});

document.getElementById('submit-btn').addEventListener('click', function () {
  saveCurrentLocation(currentLocIdx);

  const name = document.getElementById('username').value.trim();
  const phone = document.getElementById('phone').value.trim();

  if (!name || !phone) {
    alert('Please fill in your name and phone number.');
    return;
  }

  const result = locations.map((loc, i) => ({
    location: loc,
    numbers: shamrockData[i].filter(v => v !== '')
  }));

  console.log('Submitted:', { name, phone, shamrocks: result });
  alert('Submitted! 🍀 Enjoy the crawl!');
});