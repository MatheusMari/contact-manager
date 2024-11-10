const prompt = require("prompt-sync")({ sigint: true });
const ProxyGerenciadorContatos = require("../services/ProxyGerenciadorContatos");
const Contato = require('../models/Contato');

const gerenciadorProxy = new ProxyGerenciadorContatos();

function exibirMenu() {
    console.log("\n--- Gerenciador de Contatos ---");
    console.log("1. Adicionar Contato");
    console.log("2. Remover Contato");
    console.log("3. Listar Contatos");
    console.log("4. Buscar Contato por Nome");
    console.log("5. Sair");
}

function iniciarCLI() {
    let opcao;
    do {
        exibirMenu();
        opcao = prompt("Escolha uma opção: ");

        switch (opcao) {
            case "1":
                const nome = prompt("Nome: ");
                const telefone = prompt("Telefone: ");
                const email = prompt("Email: ");
                const contato = new Contato(nome, telefone, email);
                gerenciadorProxy.adicionarContato(contato);
                break;
            case "2":
                const nomeRemover = prompt("Nome do contato a remover: ");
                gerenciadorProxy.removerContato(nomeRemover);
                break;
            case "3":
                gerenciadorProxy.listarContatos();
                break;
            case "4":
                const termo = prompt("Nome para buscar: ");
                gerenciadorProxy.buscarContato(termo);
                break;
            case "5":
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida.");
        }
    } while (opcao !== "5");
}

module.exports = iniciarCLI;
