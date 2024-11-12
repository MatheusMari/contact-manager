const GerenciadorContatos = require("./GerenciadorContatos");

class ProxyGerenciadorContatos {
  constructor() {
    this.gerenciador = new GerenciadorContatos();
  }

  adicionarContato(contato) {
    if (this.validarContato(contato)) {
      this.gerenciador.adicionarContato(contato);
    } else {
      console.log("\nErro: Contato inválido. Verifique os dados fornecidos.");
    }
  }

  removerContato(nome) {
    if (!nome) {
      throw new Error("\nO nome para remoção não pode estar vazio.");
    }
    this.gerenciador.removerContato(nome);
  }

  listarContatos() {
    this.gerenciador.listarContatos();
  }

  definirEstrategia(strategy) {
    this.gerenciador.setStrategy(strategy);
  }

  buscarContato(termo) {
    this.gerenciador.buscarContato(termo);
  }

  validarContato(contato) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefoneRegex = /^\d{10,15}$/;

    if (!contato.nome) {
      console.log("\nErro: O nome do contato é obrigatório.");
      return false;
    }
    if (!emailRegex.test(contato.email)) {
      console.log("\nErro: O email fornecido é inválido.");
      return false;
    }
    if (!telefoneRegex.test(contato.telefone)) {
      console.log("\nErro: O telefone deve conter entre 10 e 15 dígitos.");
      return false;
    }
    return true;
  }
}

module.exports = ProxyGerenciadorContatos;
