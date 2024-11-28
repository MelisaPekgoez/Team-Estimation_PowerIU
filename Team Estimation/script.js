// Kartenstapel
let cards = ["Karte 1", "Karte 2", "Karte 3", "Karte 4", "Karte 5"];

// Kartenstapel aktualisieren
function updateCardPile() {
  const pile = document.getElementById("pile");
  pile.innerHTML = "";

  cards.forEach((text, index) => {
    const card = createCard(text, index);
    pile.appendChild(card);
  });
}

// Karte erstellen
function createCard(text, index) {
  const card = document.createElement("li");
  card.textContent = text;
  card.id = `card-${index}`;
  card.draggable = true;
  card.addEventListener("dragstart", dragCard);
  return card;
}

// Drag-and-Drop-Funktionen
function allowDrop(event) {
  event.preventDefault();
}

function dragCard(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
}

function dropCard(event) {
  event.preventDefault();
  
  const cardId = event.dataTransfer.getData("text");
  const card = document.getElementById(cardId);

  // Karte ins Ziel-Feld einfügen
  event.target.appendChild(card);
}

// Matrix als PNG exportieren
document.getElementById("end-prioritization").addEventListener("click", () => {
  const matrix = document.getElementById("matrix");

  html2canvas(matrix).then(canvas => {
    const link = document.createElement("a");
    link.download = "priorisierung.png";
    link.href = canvas.toDataURL();
    link.click();
  });
});

// Spiel initialisieren
updateCardPile();
