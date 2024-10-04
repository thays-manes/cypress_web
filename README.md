# Descrição
Este repositório contém testes automatizados usando o Cypress para validar a funcionalidade de cadastro na MedCof Academy. Certifique-se de seguir as instruções de configuração e execução dos testes para garantir a qualidade do software.

## Como instalar e executar
1. Clone o projeto
2. Rode o comando `npm install` para instalar as dependencias
3. Use npx cypress open para abrir a aplicação 
4. Use o comando `npm run recordTestDashCypress ` para rodar em modo headlees e gerar as evidencias 
4. Acesse o link https://cloud.cypress.io/projects/7wcc73 para visualizar as evidencias e o dashboard



## Pré-requisitos
Antes de executar os testes Cypress, certifique-se de que o seguinte esteja configurado em seu ambiente de desenvolvimento:

- Node.js instalado ([Node.js](https://nodejs.org/))
- Cypress instalado globalmente ou localmente no projeto ([Cypress](https://www.cypress.io/))

## Estrutura do Projeto
O projeto de automação é organizado da seguinte forma:

- `cypress/e2e`: Esta pasta contém os arquivos de teste Cypress.
- `cypress/support`: Aqui esta armazenado, comandos personalizados e elementos separados por pagina.
- `cypress.json`: Arquivo de configuração Cypress para definir configurações globais.

## Testes e Validações Disponíveis

### Validação da Página Inicial
- `validarPaginaInicialCarregada()`: Este teste verifica se a página inicial foi carregada corretamente, verificando a visibilidade de elementos chave.

### Ação de ir para pagina da Academy
- `clicaLinkMdCofAcademy()`: Este teste executaa ação de clicar no link para redirecionameno para a pagania de academy, validando antes se estou clicando no link com o nome do conteudo desejado.

### Valido se estou na pagina correto e clico para ir para o cadastro
- `validaEDirecionaParaAcessarConteudo()`: Este valido se fui redirecionado para a tela correta e em seguida clica no botão para realizar o cadastro.

### Validação do cadastro
- `criaCadastro(palavraChave)`: Realizo o cadastro e verifico se a mensagem de confirmação esta com os dados que informei.


