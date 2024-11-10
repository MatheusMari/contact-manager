const BuscaStrategy = require("./BuscaStrategy");

class GerenciadorContatos {
  constructor() {
    this.contatos = [];
    this.strategy = null;
  }

  adicionarContato(contato) {
    this.contatos.push(contato);
    console.log(`\nContato ${contato.nome} adicionado.`);
  }

  removerContato(nome) {
    const index = this.contatos.findIndex((contato) => contato.nome === nome);
    if (index !== -1) {
      this.contatos.splice(index, 1);
      console.log(`\nContato ${nome} removido.`);
    } else {
      console.log(`\nErro: Contato ${nome} não encontrado.`);
    }
  }

  listarContatos() {
    if (this.contatos.length === 0) {
      console.log("\nNenhum contato encontrado.");
    } else {
      this.contatos.forEach((contato) =>
        console.log(
          `\nNome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`
        )
      );
    }
  }

  setStrategy(strategy) {
    if (!(strategy instanceof BuscaStrategy)) {
      throw new Error("A estratégia deve ser uma instância de BuscaStrategy.");
    }
    this.strategy = strategy;
  }

  buscarContato(termo) {
    if (!this.strategy) {
      throw new Error("Estratégia de busca não definida.");
    }
    const resultados = this.strategy.buscar(this.contatos, termo);
    if (resultados.length > 0) {
      resultados.forEach((contato) =>
        console.log(
          "\nContato Encontrado: " +
            `Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`
        )
      );
    } else {
      console.log(`\nNenhum contato encontrado para o termo: ${termo}`);
    }
  }
}

module.exports = GerenciadorContatos;
