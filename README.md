# API REST com Node.js, Express e SQLite

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js->=18.0.0-green.svg)](https://nodejs.org/)

Este é um projeto de exemplo para uma API RESTful construída com Node.js e TypeScript. Ele utiliza o framework Express para o roteamento e o SQLite como banco de dados, tornando-o leve e fácil de configurar.

## ✨ Funcionalidades

- **Estrutura Moderna:** Utiliza TypeScript e módulos ES (`"type": "module"`).
- **Servidor Robusto:** Construído com o popular framework Express.
- **Banco de Dados Simples:** Integração com SQLite para persistência de dados sem a necessidade de um servidor de banco de dados separado.
- **Ambiente de Desenvolvimento:** Configurado com `nodemon` e `ts-node` para reinicialização automática e execução de TypeScript em tempo real.
- **Scripts Prontos:** Scripts para desenvolvimento, build e produção.

## 🛠️ Tecnologias Utilizadas

- **Node.js:** Ambiente de execução JavaScript.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
- **Express:** Framework para construção de APIs e aplicações web.
- **SQLite3:** Driver para o banco de dados SQLite.
- **Nodemon:** Ferramenta para reiniciar o servidor automaticamente durante o desenvolvimento.
- **ts-node:** Execução de TypeScript diretamente no Node.js.

## 🚀 Começando

Siga as instruções abaixo para executar o projeto em seu ambiente local.

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm (geralmente instalado com o Node.js)

### Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/app-express.git
   ```

2. Navegue até o diretório do projeto:
   ```sh
   cd app-express
   ```

3. Instale as dependências:
   ```sh
   npm install
   ```

## 🏃‍♀️ Executando a Aplicação

### Modo de Desenvolvimento

Para iniciar o servidor em modo de desenvolvimento com hot-reload:
```sh
npm run dev
```
O servidor estará disponível em `http://localhost:3000` (ou a porta que você configurar).

### Modo de Produção

1. Compile os arquivos TypeScript para JavaScript:
   ```sh
   npm run build
   ```
2. Inicie o servidor a partir dos arquivos compilados no diretório `dist/`:
   ```sh
   npm run start
   ```

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo `LICENSE` para mais detalhes.
