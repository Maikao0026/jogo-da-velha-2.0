import 
{
  gameOver,
  player1,
  player2,
  playTime,
  vencedor,
  setGameOver,
  setVencedor,
  setPlayTime
} from "./index.js";

const corVitoria = {value: getComputedStyle(document.documentElement).getPropertyValue("--cor-vitoria")};
const tabuleiro = document.querySelectorAll("div#tabuleiro>span");
let placar = document.querySelector("p");
let placarPlayer1 = 0;
let placarPlayer2 = 0;
let placarEmpates = 0;
let h2 = document.querySelector("h2");

const adicionarFuncoesAoTabuleiro = (event) => {
  const casa = event.currentTarget;
  if (gameOver.value) {
    if (playTime.value == player1.value) {
      casa.innerText = "X";
      casa.setAttribute("data-valor", player1.value);
      setPlayTime(player2.value)
    } else {
      casa.innerText = "O";
      casa.setAttribute("data-valor", player2.value);
      setPlayTime(player1.value)
    }
    casa.removeEventListener("click", adicionarFuncoesAoTabuleiro);
    verificarGanhador();
  }
};

const atulaizar = () => {
  if (vencedor.value) {
    if (vencedor.value == player1.value) {
      placarPlayer1++;
      h2.style.display = "block";
      h2.innerText = `Vencedor ${player1.value}`;
    } else if (vencedor.value == player2.value) {
      placarPlayer2++;
      h2.innerText = `Vencedor ${player2.value}`;
    } else {
      placarEmpates++;
      h2.innerText = `Empate ${placarEmpates}`;
    }

    h2.style.display = "block";
    placar.innerText = `${player1.value} ${placarPlayer1} X ${placarPlayer2} ${player2.value}`;
  }
};

const verificarGanhador = () => {
  const list = [];
  for (let i = 0; i < tabuleiro.length; i++) {
    list.push(tabuleiro[i].getAttribute("data-valor"));
  }

  if (list[4] == list[0] && list[4] == list[8]) {
    for(let i = 0; i<=8;i+=4){
      tabuleiro[i].style.backgroundColor = corVitoria.value
    }
  
    setGameOver(false);
    if (list[4] == player1.value) {
      setVencedor(player1.value)
    } else {
      setVencedor(player2.value)
    }
  }

  if (list[4] == list[2] && list[4] == list[6]) {
   for(let i = 2; i <= 6; i+=2){
    tabuleiro[i].style.backgroundColor = corVitoria.value;
    }
    setGameOver(false)
    if (list[4] == player1.value) {
      setVencedor(player1.value)
    } else {
      setVencedor(player2.value)
    }
  }

  if (list[1] == list[4] && list[4] == list[7]) {
    for(let i = 1; i<=7; i+=3){
      tabuleiro[i].style.backgroundColor = corVitoria.value;
    }
    setGameOver(false)
    if (list[4] == player1.value) {
      setVencedor(player1.value)
    } else {
      setVencedor(player2.value) 
    }
  }

  if (list[4] == list[3] && list[4] == list[5]) {
    for(let i =3; i<=5; i++){
      tabuleiro[i].style.backgroundColor = corVitoria.value;
    }
    setGameOver(false)
    if (list[4] == player1.value) {
      setVencedor(player1.value)
    } else {
      setVencedor(player2.value)
    }
  }
  if (list[0] == list[1] && list[0] == list[2]) {
    for(let i = 0; i<=2; i++){
      tabuleiro[i].style.backgroundColor = corVitoria.value;
    }
    setGameOver(false)
    if (list[0] == player1.value) {
      setVencedor(player1.value)
    } else {
      setVencedor(player2.value)
    }
  }
  if (list[0] == list[3] && list[0] == list[6]) {
    for(let i = 0; i<=6; i+=3){
      tabuleiro[i].style.backgroundColor = corVitoria.value;
    }
    setGameOver(false)
    if (list[0] == player1.value) {
      setVencedor(player1.value)
    } else {
      setVencedor(player2.value)
    }
  }
  if (list[2] == list[5] && list[5] == list[8]) {
   for(let i = 2; i<=8; i+=3){
      tabuleiro[i].style.backgroundColor = corVitoria.value;
    }
    setGameOver(false)
    if (list[8] == player1.value) {
      setVencedor(player1.value)
    } else {
      setVencedor(player2.value)
    }
  }
  if (list[8] == list[7] && list[8] == list[6]) {
    for(let i = 6; i<=8; i++){
      tabuleiro[i].style.backgroundColor = corVitoria.value;
    }
    setGameOver(false)
    if (list[8] == player1.value) {
      setVencedor(player1.value)
    } else {
      setVencedor(player2.value
        )
    }
  }
 if (list[0] != "0" && list[1] != "1" &&
    list[2] != "2" && list[3] != "3" &&
    list[4] != "4" && list[5] != "5" &&
    list[6] != "6" && list[7] != "7" &&
    list[8] != "8" && vencedor){
      setGameOver(false)
      setVencedor('Empate')
    }
  atulaizar()
};
     


export {verificarGanhador, adicionarFuncoesAoTabuleiro};

// for (let i = 0; i < list.length; i++) {
//   empate = ((list[i] != i)&&(!vencedor.value))
  
//   console.log(`item${list[i]} indice${i}`)
// }
// console.log(!(vencedor.value))  