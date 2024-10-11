// Função para calcular o IMC
function calcular_imc(peso, altura) {
    return peso / (altura * altura);
  }
  
  // Função para interpretar o IMC com base em idade, sexo e percentis
  function interpretar_imc(idade, sexo, imc) {
    // Dicionários com os percentis de IMC por idade e sexo (2 a 14 anos) - ATUALIZADO
    var imc_meninos = {
        2:  [13.9, 16.6, 18.1],
        3:  [13.5, 16.0, 17.6],
        4:  [13.1, 15.4, 16.9],
        5:  [12.7, 14.8, 16.3], 
        6:  [12.4, 14.5, 16.0],
        7:  [12.2, 14.2, 15.7],
        8:  [12.0, 14.0, 15.5],
        9:  [11.9, 13.9, 15.4],
        10: [11.9, 14.0, 15.6],
        11: [12.0, 14.2, 15.8],
        12: [12.1, 14.5, 16.1],
        13: [12.3, 14.8, 16.4],
        14: [12.6, 15.2, 16.8] 
    };
  
    var imc_meninas = {
        2:  [13.6, 16.2, 17.7],  
        3:  [13.2, 15.6, 17.1],
        4:  [12.8, 15.0, 16.4],
        5:  [12.5, 14.5, 15.9],
        6:  [12.2, 14.1, 15.5],
        7:  [12.0, 13.8, 15.2],
        8:  [11.9, 13.7, 15.1],
        9:  [11.8, 13.6, 15.0],
        10: [11.9, 13.8, 15.3],
        11: [12.0, 14.1, 15.6],
        12: [12.2, 14.4, 16.0],
        13: [12.5, 14.8, 16.4],
        14: [12.8, 15.3, 16.9]
    };
  
    // Seleciona o dicionário correto com base no sexo
    var percentis = (sexo == "masculino") ? imc_meninos[idade] : imc_meninas[idade];
  
    if (!percentis) {
      return "Dados de percentil não disponíveis para esta idade.";
    }
  
    // Compara o IMC com os percentis e retorna a interpretação
    if (imc < percentis[0]) {
        return "abaixo do peso";
    } else if (imc < percentis[1]) {
        return "peso saudável";
    } else if (imc < percentis[2]) {
        return "sobrepeso";
    } else {
        return "obesidade";
    }
  }
  
  function calcularIMC() {
      // Obter valores dos campos
      var idade = parseInt(document.getElementById("idade").value);
      var sexo = document.getElementById("sexo").value;
      var peso = parseFloat(document.getElementById("peso").value);
      var altura = parseFloat(document.getElementById("altura").value)   
   / 100; // Converter para metros   
  
  
      // Calcula o IMC
      var imc = calcular_imc(peso, altura);
  
      // Obtém a interpretação do IMC
      var resultado = interpretar_imc(idade, sexo, imc);
  
      // Exibir resultado
      document.getElementById("resultado").innerHTML = "IMC: " + imc.toFixed(2) + " - " + resultado;
  }