class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    } else {
      ataque = "ataque desconhecido";
    }

    return ataque;
  }

  resultadoAtaque() {
    const ataque = this.atacar();
    console.log(`${this.nome} atacou usando ${ataque}.`);
  }
}

let heroi1 = new heroi("Gandalf", 3000, "mago");
heroi1.resultadoAtaque();
let heroi2 = new heroi("Conan", 35, "guerreiro");
heroi2.resultadoAtaque();
let heroi3 = new heroi("Liu Kang", 28, "monge");
heroi3.resultadoAtaque();