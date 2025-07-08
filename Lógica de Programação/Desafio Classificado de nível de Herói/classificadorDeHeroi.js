let nomeH = "Igor";
let xpH = 900

  switch (xpH) {
    case xpH < 1000:
      console.log("Ferro");
      break;

      case xpH >= 1001 || xpH <= 2000:
      console.log("Bronze");
      break;

      case xpH >= 2001 || xpH <= 5000:
      console.log("Prata");
      break;

      case xpH >= 5001 || xpH <= 7000:
      console.log("Ouro");
      break;

      case xpH >= 7001 || xpH <= 8000:
      console.log("Platina");
      break;

      case xpH >= 8001 || xpH <= 9000:
      console.log("Ascendente");
      break;

      case xpH >= 9001 || xpH <= 10000:
      console.log("Imortal");
      break;

      case xpH >= 10001:
      console.log("Radiante");
  }

console.log(`O herói ${nomeH} está no nível de ${xpH}`);