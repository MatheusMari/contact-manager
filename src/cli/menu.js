const prompt = require("prompt-sync")({ sigint: true });
const ProxyGerenciadorContatos = require("../services/ProxyGerenciadorContatos");
const BuscaPorNomeStrategy = require("../services/BuscaPorNomeStrategy");
const Contato = require("../models/Contato");

const gerenciadorProxy = new ProxyGerenciadorContatos();
const buscaPorNomeStrategy = new BuscaPorNomeStrategy();

function exibirMenu() {
  console.log("\n--- Gerenciador de Contatos ---");
  console.log("1. Adicionar Contato");
  console.log("2. Remover Contato");
  console.log("3. Listar Contatos");
  console.log("4. Buscar Contato por Nome");
  console.log("5. Sair");
  console.log("--------------------------------\n");
}

function iniciarCLI() {
  let opcao;
  do {
    exibirMenu();
    opcao = prompt("Escolha uma opção: ");

    try {
      switch (opcao) {
        case "1":
          console.log("\n***Adicionar Contato***\n");
          const nome = prompt("Nome: ");
          const telefone = prompt("Telefone: ");
          const email = prompt("Email: ");
          const contato = new Contato(nome, telefone, email);
          gerenciadorProxy.adicionarContato(contato);
          break;
        case "2":
          console.log("\n***Remover Contato***\n");
          const nomeRemover = prompt("Nome do contato: ");
          gerenciadorProxy.removerContato(nomeRemover);
          break;
        case "3":
          console.log("\n***Listar Contatos***");
          gerenciadorProxy.listarContatos();
          break;
        case "4":
          console.log("\n***Buscar Contato***\n");
          gerenciadorProxy.definirEstrategia(buscaPorNomeStrategy);
          const termo = prompt("Nome do contato: ");
          gerenciadorProxy.buscarContato(termo);
          break;
        case "5":
          console.log("\nSaindo...");
          break;
        default:
          console.log("Opção inválida.");
      }
    } catch (error) {
      console.log(`Erro: ${error.message}`);
    }
  } while (opcao !== "5");
}

module.exports = iniciarCLI;
