const GerenciadorContatos = require('./GerenciadorContatos');

class ProxyGerenciadorContatos {
    constructor() {
        this.gerenciador = new GerenciadorContatos();
    }

    adicionarContato(contato) {
        if (this.validarContato(contato)) {
            this.gerenciador.adicionarContato(contato);
        } else {
            console.log("Erro: Contato inválido.");
        }
    }

    removerContato(nome) {
        this.gerenciador.removerContato(nome);
    }

    listarContatos() {
        this.gerenciador.listarContatos();
    }

    validarContato(contato) {
        return contato.nome && contato.telefone && contato.email;
    }
}

module.exports = ProxyGerenciadorContatos;
