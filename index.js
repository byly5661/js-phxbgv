// Variables pour suivre le tour actuel et le nombre de tours joués
let currentPlayer = "X";
let moves = 0;

// Récupère les cellules de la grille
const cells = document.querySelectorAll(".cell");

// Ajoute un écouteur d'événement à chaque cellule pour détecter les clics de l'utilisateur
cells.forEach(cell => {
  cell.addEventListener("click", handleClick);
});

// Fonction qui gère les clics sur les cellules
function handleClick(e) {
  // Empêche le joueur de jouer une case déjà remplie
  if (e.target.textContent !== "") {
    return;
  }

  // Ajoute le symbole du joueur actuel à la cellule cliquée
  e.target.textContent = currentPlayer;

  // Vérifie si le joueur actuel a gagné
  checkWin();

  // Change le joueur actuel
  currentPlayer = currentPlayer === "X" ? "O" : "X";

  // Incrémente le compteur de tours joués
  moves++;

  // Vérifie s'il y a match nul
  checkDraw();
}

// Fonction pour vérifier si le joueur actuel a gagné
function checkWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  // Vérifie chaque combinaison gagnante
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (
      cells[a].textContent === currentPlayer &&
      cells[b].textContent === currentPlayer &&
      cells[c].textContent === currentPlayer
    ) {
      // Affiche un message pour indiquer que le joueur actuel a gagné
      alert(currentPlayer + " a gagné !");
      resetGame();
    }
  }
}

// Fonction pour vérifier s'il y a match nul
function checkDraw() {
  if (moves === 9) {
    alert("Match nul !");
    resetGame();
  }
}

// Fonction pour réinitialiser le jeu
function resetGame() {
  currentPlayer = "X";
  moves = 0;
  cells.forEach(cell => {
    cell.textContent = "";
  });
}
