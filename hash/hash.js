import { createHash } from "crypto";

function criaHash(senha) {
  return createHash("sha256").update(senha).digest("hex");
}

console.log(criaHash("uma string qualquer"));

class Usuario {
  constructor(nome, senha) {
    this.nome = nome;
    this.hash = criaHash(senha);
  }

  autentica(nome, senha) {
    if (nome === this.nome && this.hash === criaHash(senha)) {
      console.log("Usuário autenticado com sucesso!");
      return true;
    }
    console.log("Usuário ou senha incorretos.");
    return false;
  }
}

const usuario = new Usuario("Arthur Diduch", "123456");

console.log(usuario);

// Caso de sucesso
usuario.autentica("Arthur Diduch", "123456");

//Caso de fracasso
usuario.autentica("a d", "123456");
usuario.autentica("Arthur Diduch", "1234567");
