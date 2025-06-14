# Recomendador de Produtos RD Station

Projeto proposto como desafio técnico para vaga de Desenvolvedor Front-end na empresa RD Station. Os requisitos para o desafio constam no README da pasta frontend: `frontend/README.md`

## Pré-requisitos

- Node.js versão 18.3 é necessária para rodar o projeto.

## 1. Estrutura do Projeto

O projeto está dividido em:
- **components/**: Componentes de interface (UI), como Formulário, Lista de Recomendações, Checkbox, etc.
- **services/**: Serviços de lógica de negócio, como o sistema de recomendação de produtos.
- **hooks/**: Hooks customizados para manipulação de estado e lógica reutilizável.
- **mocks/**: Dados mockados para testes automatizados.
- **App.js**: Componente principal da aplicação.

## 2. Testes

O projeto possui os seguintes testes:

- **Testes de serviço de recomendação:**
  - Arquivo: `src/services/recommendationService.test.js`
  - Testa a lógica de recomendação de produtos (Single e Multiple Products, empates, etc).

- **Testes do formulário e fluxo de UI:**
  - Arquivo: `src/components/Form/Form.test.js`
  - Testa o comportamento do botão "Obter Recomendação", o reset do formulário, e a renderização da lista de recomendações.

## 3. Como rodar o projeto

1. Instale as dependências:
   ```bash
   yarn install
   ```
2. Inicie o backend (json-server):
   ```bash
   yarn start:backend
   ```
3. Inicie o frontend:
   ```bash
   yarn start:frontend
   ```
4. Ou rode ambos simultaneamente:
   ```bash
   yarn dev
   ```

## 4. Como rodar os testes

Execute na raiz do projeto frontend:
```bash
yarn test
```
