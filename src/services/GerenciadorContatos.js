class GerenciadorContatos {
    constructor() {
        this.contatos = [];
    }

    adicionarContato(contato) { 
        this.contatos.push(contato);
        console.log(`Contato ${contato.nome} adicionado.`);
    }

    removerContato(nome) {
        this.contatos = this.contatos.filter(contato => contato.nome !== nome);
        console.log(`Contato ${nome} removido.`);
    }

    listarContatos() {
        this.contatos.forEach(contato => 
            console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`)
        );
    }
}

module.exports = GerenciadorContatos;
