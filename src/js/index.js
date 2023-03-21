import '../style/style.css'
import tema from "./tema.js";
import { adicionarFuncoesAoTabuleiro} from "./funçõesDoJogo.js";
import { iniciarPartida, reiniciarPartida } from "./iniciar.js";

let player1 = {value: document.getElementById("player1").value}
let player2 = {value: document.getElementById("player2").value}
let playTime = {value: player1.value}
let gameOver = {value: true}
let vencedor = {value: ''}

document.querySelector("button.tema").addEventListener("click", tema);
document.getElementById("iniciarPartida").addEventListener("click", iniciarPartida);
document.getElementById('reiniciar').addEventListener('click', reiniciarPartida)
document.querySelectorAll("div#tabuleiro>span").forEach((element) => {
  element.addEventListener("click", adicionarFuncoesAoTabuleiro);
});

const setPlayTime = (newPlayTime) =>
{ 
 playTime.value = newPlayTime 
}

const setVencedor = (newVencedor) =>
{ 
 vencedor.value = newVencedor 
}

const setGameOver = (newGameOver) =>
{ 
  gameOver.value = newGameOver 
}

export
{
  player1,
  player2, 
  playTime,    
  vencedor, 
  gameOver,
  setPlayTime,
  setGameOver,
  setVencedor
}

