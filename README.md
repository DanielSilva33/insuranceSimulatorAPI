# insuranceSimulatorAPI

[![nodejs-badge][nodejs-img]][nodejs]

[nodejs-img]: https://img.shields.io/badge/Node.js-v14.17-green
[nodejs]: https://nodejs.org/en/



## Descrição 📌 <a name="description"></a>
Projeto desenvolvido em nodejs, Typescript, Typeorme Mysql.

---
## Tecnologias e Ferramentas 💻 <a name="technologies"></a>
* __[Typescript](https://www.typescriptlang.org/)__ - Documentação Typescript.
* __[Node.js](https://nodejs.org/en/)__ - Baixe a versão recomendada LTS.
* __[Mysql](https://www.mysql.com/downloads/)__ - MySQL Community (GPL).
* __[Typeorm](https://typeorm.io/#/)__ - Documentação Typeorm.



## Execução ✅ <a name="execution"></a>

```bash

# Clone este repositório
$ git clone https://github.com/DanielSilva33/insuranceSimulatorAPI.git

# Baixe as dependências do projeto
$ npm i

# Execute as migrations do projeto
$ npm run typeorm migration:run

# Executar aplicação
$ npm run dev
```

## Configure o seu banco de dados:

Para esse projeto é preciso que esteja com o mysql rodando, e que a tabela "seguro" sejá criada.

## Insomnia

Execute o teste das rotas pelo insomnia, que são elas:

## Método [GET] 

### Users
* baseURL/users
* baseURL/users/:user_id

### Insurance
* baseURL/insurance
* baseURL/insurance/:id

### Covarage
* baseURL/cobertura
* baseURL/cobertura/:id
* baseURL/allcobertura

### Users Auth
* baseURL/users-auth

## Método [POST]

### Users
* baseURL/users

### Insurance
* baseURL/insurance

### Covarage
* baseURL/cobertura

### Users Auth
* baseURL/users-save
* baseURL/session


---
Feito por [Daniel Silva](https://www.linkedin.com/in/daniel-silva-1a3209196/)
