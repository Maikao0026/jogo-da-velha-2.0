import { adicionarFuncoesAoTabuleiro } from './funçõesDoJogo.js';
import 
{
  player1, 
  player2, 
  playTime, 
  setPlayTime,
  setGameOver,
  setVencedor
} from './index.js'
const tabuleiro = document.querySelectorAll("div#tabuleiro>span");


const iniciarPartida = (ev) => {
  const botao = ev.currentTarget
  document.getElementById("formulario").style.display = "none";
  document.getElementById('tabuleiro').style.display = "grid";
  document.getElementById('reiniciar').style.display = 'block'
  document.querySelector("p").style.display = "inline";
}

const reiniciarPartida = () =>
{
  tabuleiro.forEach((casa, i) => 
  {
    casa.addEventListener('click', adicionarFuncoesAoTabuleiro)
    casa.setAttribute("data-valor", i)
    casa.innerText = "";
  })
  setGameOver(true)
  setVencedor('')
  
}
  export {iniciarPartida, reiniciarPartida}
//   for (let i = 0; i < tabuleiro.length; i++) {
//     tabuleiro[i].addEventListener("click", adicionarFuncoesAoTabuleiro);
//     tabuleiro[i].setAttribute("data-valor", i);
//     tabuleiro[i].innerText = "";
//     gameOver = true;
//     vencedor = "";
//     if (playTime == player1) {
//       playTime = player2;
//     } else {
//       playTime = player1;
//     }
//   }
// };