// Selecione o elemento pixels
const pixelBoard = document.getElementById("pixels");

// Define o tamanho dos quadrado exterior

const pixelSize = 250;

// Define o tamanho dos quadrados internos

const squareSize = pixelSize / 5;

// Loop para criar 25 quadrados internos

for (let i = 0; i < 25; i++) {
  // Cria o elemento quadrado interno
  let square = document.createElement("div");

  // estilo
  square.style.width = squareSize + "px";
  square.style.height = squareSize + "px";
  square.style.backgroundColor = "rgb(255, 255, 255, 0.2)";
  square.style.border = "none";
  square.style.padding = "10px";
  square.style.margin = "5px";
  square.style.display = "inline-block";
  square.style.cursor = "pointer";

  square.classList.add("pixel");

  // adc o quadrado

  pixelBoard.appendChild(square);

  if ((i + 1) % 5 === 0) {
    pixelBoard.appendChild(document.createElement("br"));
  }
}

function cleanColor() {
  pixelBoard.querySelectorAll(".pixel").forEach((e) => {
    e.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
  });
}
// Armazena a cor selecionada

// Função para obter uma cor hexadecimal aleatória
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Função para definir cores aleatórias para os elementos da paleta
function setPaletteColors() {
  const paletteColor = document.querySelectorAll(".color");
  paletteColor.forEach((e, index) => {
    let color = "";
    if (index === 0) {
      // Se for o primeiro elemento da paleta, define como preto
      color = "black";
    } else {
      color = getRandomColor();
    }
    e.style.backgroundColor = color;
    e.addEventListener("click", () => {
      selectedColor = color;
    });
  });
}

// Função para aplicar a cor selecionada ao elemento pixel clicado
function applyColorToPixel(event) {
  const pixel = event.target;
  if (selectedColor && pixel.classList.contains("pixel")) {
    pixel.style.backgroundColor = selectedColor;
  }
}

// Definindo cores iniciais para os elementos da paleta e configurando seleção de cor
let selectedColor = ""; // Armazena a cor selecionada
setPaletteColors(); // Configura cores iniciais para a paleta

// Ouvinte de evento de clique nos elementos com a classe "pixel" para aplicar a cor selecionada
document.querySelectorAll(".pixel").forEach((pixel) => {
  pixel.addEventListener("click", applyColorToPixel);
});
