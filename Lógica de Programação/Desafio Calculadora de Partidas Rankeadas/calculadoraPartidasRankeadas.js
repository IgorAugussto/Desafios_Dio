function calcularPartidasRankeadas(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;
  let nivel = "";

  if (saldoVitorias < 10) {
    nivel = "Ferro";
  } else if (saldoVitorias <= 20) {
    nivel = "Bronze";
  } else if (saldoVitorias <= 50) {
    nivel = "Prata";
  } else if (saldoVitorias <= 80) {
    nivel = "Ouro";
  } else if (saldoVitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  return { saldoVitorias, nivel };
}

const resultado = calcularPartidasRankeadas(45, 16);

console.log(
  `O Herói tem saldo de ${resultado.saldoVitorias} e está no nível de ${resultado.nivel}`
);
