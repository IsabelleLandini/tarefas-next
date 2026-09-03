# 📝 Tarefas Next.js

Aplicação de gerenciamento de tarefas desenvolvida com **Next.js, React e TypeScript**, criada para praticar componentes, gerenciamento de estado, custom hooks e testes automatizados.

## Tecnologias

* Next.js 15
* React
* TypeScript
* Jest
* Testing Library

## Funcionalidades

* Exibição de tarefas iniciais
* Adição de novas tarefas
* Validação do formulário
* Mensagem de erro para tarefa sem nome
* Contador de tarefas
* Atualização da lista ao adicionar uma tarefa
* Testes automatizados

## 📂 Estrutura

```text
tarefas-next/
├── app/
│   └── page.tsx
├── components/
│   ├── ListaTarefas.tsx
│   └── NovaTarefa.tsx
├── hooks/
│   └── useContadorDeTarefas.ts
├── tests/
│   ├── NovaTarefa.test.tsx
│   ├── page.test.tsx
│   └── useContadorDeTarefas.test.ts
├── types/
│   └── tarefa.ts
├── jest.config.ts
├── jest.setup.ts
├── package.json
└── tsconfig.json
```

## Testes

O projeto utiliza **Jest + Testing Library** para validar os principais fluxos da aplicação.

```bash
npm test
```

Os testes verificam:

* Renderização do formulário
* Validação de tarefa vazia
* Exibição da mensagem de erro
* Adição de tarefa válida
* Contagem de tarefas pelo custom hook
* Renderização das tarefas iniciais

## Como executar

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

Acesse:

```text
http://localhost:3000
```

## 👩🏻‍💻 Autora

**Isabelle Landini**



