export default () =>{
  const body = document.querySelector('body')
  const root = document.querySelector(':root')
  if(body.dataset.tema == 'dark')
  {
    root.style.setProperty("--cor-de-fundo", "#fafafa");
    root.style.setProperty("--cor-das-letras", "#100f10");
    root.style.setProperty("--cor-das-linhas", "#ff0043");
    body.dataset.tema = 'light'
  } else if(body.dataset.tema == 'red'){
    root.style.setProperty("--cor-de-fundo", " #100f10");
    root.style.setProperty("--cor-das-letras", "#fafafa");
    root.style.setProperty("--cor-das-linhas", "#FF0043");
    body.dataset.tema = "dark";
  }else {
     root.style.setProperty("--cor-de-fundo", " #ff0043");
     root.style.setProperty("--cor-das-letras", "#fafafa");
     root.style.setProperty("--cor-das-linhas", "#fafafa");
     body.dataset.tema = "red";
  }
}
