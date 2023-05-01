// define as probabilidades de cada elemento
var probs = {
    "grama": 0.4,
    "casa": 0.05,
    "arvore": 0.1,
    "lago": 0.01,
    "vazio": 0.01,
    "pedra": 0.05,
  };
  
  // cria uma matriz aleatória baseada nas probabilidades definidas acima
  var matriz = [];
  for (var i = 0; i < 10; i++) {
    matriz[i] = [];
    for (var j = 0; j < 10; j++) {
      var rand = Math.random();
      var elem = "vazio";
      var acc = 0;
      for (var key in probs) {
        acc += probs[key];
        if (rand < acc) {
          elem = key;
          break;
        }
      }
      matriz[i][j] = elem;
    }
  }
  
  // cria uma tabela HTML com as células correspondentes à matriz
  var tabela = document.createElement("table");
  tabela.style.border = "1px solid black";
  for (var i = 0; i < matriz.length; i++) {
    var linha = document.createElement("tr");
    for (var j = 0; j < matriz[i].length; j++) {
      var celula = document.createElement("td");
      celula.style.width = "50px";
      celula.style.height = "50px";
      celula.style.border = "1px solid green";
      if (matriz[i][j] != "vazio") {
        var img = document.createElement("img");
        img.src = "imgs/" + matriz[i][j] + ".png";
        img.style.width = "50px";
        img.style.height = "50px";
        celula.appendChild(img);
      } else {
        celula.style.backgroundColor = "green";
      }
      linha.appendChild(celula);
    }
    tabela.appendChild(linha);
  }
  
  // adiciona a tabela à página HTML
  var div = document.getElementById("mapa");
  div.appendChild(tabela);
  