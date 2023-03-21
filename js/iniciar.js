import { adicionarFuncoesAoTabuleiro } from './funçõesDoJogo.js';
import { setGameOver,setVencedor} from './index.js'

const tabuleiro = document.querySelectorAll("div#tabuleiro>span");
const body = document.querySelector('body').getAttribute('data-tema')
const corDeFundo = {
  value: getComputedStyle(document.documentElement).getPropertyValue(
    "--cor-de-fundo"
  ),
  mudarCorDasCasas: function () {
    if (body == "dark") {
      this.value = getComputedStyle(document.documentElement).getPropertyValue(
        "--cor-de-fundo"
      );
    }
    if (body == "red") {
      this.value = getComputedStyle(document.documentElement).getPropertyValue(
        "--cor-das-linhas"
      );
    }
    if (body == "light") {
      this.value = getComputedStyle(document.documentElement).getPropertyValue(
        "--cor-das-letras"
      );
    }
  },
};


const iniciarPartida = () => {
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
    casa.style.backgroundColor = corDeFundo.value

  })
  setGameOver(true)
  setVencedor('')
  
}

export {iniciarPartida, reiniciarPartida, corDeFundo, tabuleiro}