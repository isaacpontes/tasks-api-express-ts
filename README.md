# Task Management API

Esta é uma API simples de gerenciamento de tarefas desenvolvida com Node.js, Express e TypeScript. A API permite criar, visualizar, atualizar e deletar tarefas, seguindo os princípios de boas práticas em desenvolvimento de software.

Este projeto foi criado como parte do curso de Node.js da escola de programação [OneBitCode](https://onebitcode.com).

## Funcionalidades

- **Listar todas as tarefas**: `GET /tasks`
- **Criar uma nova tarefa**: `POST /tasks`
- **Visualizar uma tarefa específica**: `GET /tasks/:id`
- **Atualizar uma tarefa existente**: `PUT /tasks/:id`
- **Deletar uma tarefa**: `DELETE /tasks/:id`

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **TypeScript**
- **Zod**: Validação de esquema para o corpo das requisições

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd nome-do-repositorio
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

## Uso

1. Inicie o servidor:
   ```bash
   npm run start
   ```
2. Acesse a API via [http://localhost:3000](http://localhost:3000).

## Exemplos de Requisição

### Listar Todas as Tarefas

```bash
GET /tasks
```

Retorno esperado:

```json
[
  {
    "id": 1,
    "title": "Aprender Node.js",
    "description": "Completar o curso de Node.js na OneBitCode",
    "status": "todo",
    "priority": "high",
    "createdAt": "2024-08-09T12:00:00.000Z",
    "updatedAt": "2024-08-09T12:00:00.000Z"
  }
]
```

### Criar uma Nova Tarefa

```bash
POST /tasks
```

Corpo da requisição:

```json
{
  "title": "Aprender TypeScript",
  "description": "Completar a introdução ao TypeScript",
  "status": "todo",
  "priority": "medium"
}
```

Retorno esperado:

```json
{
  "id": 2,
  "title": "Aprender TypeScript",
  "description": "Completar a introdução ao TypeScript",
  "status": "todo",
  "priority": "medium",
  "createdAt": "2024-08-09T12:10:00.000Z",
  "updatedAt": "2024-08-09T12:10:00.000Z"
}
```

## Estrutura de Pastas

```
.
├── src
│   ├── controllers
│   │   └── TaskController.ts
│   ├── models
│   │   └── Task.ts
│   ├── errors
│   │   └── HttpError.ts
│   └── server.ts
├── package.json
└── tsconfig.json
```

## Contribuindo

Se você quiser contribuir com este projeto, sinta-se à vontade para abrir um pull request ou relatar um problema. Todas as contribuições são bem-vindas!

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
