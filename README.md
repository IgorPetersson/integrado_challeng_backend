<h1 align="center" id="top">Integrado backend</span></h1>
<p align="center">
<h3 align="left">
<span style="color:#10BEF5"><em>Integrado backend</em></span> é uma aplicação utilizada para cadastrar e encontrar universidades na América do Sul.
</h3>

## 🕹 Features

<strong>Cadastrar uma universidade</strong>   
- Rota: localhost:3000/universities
- Método: POST
- Body: Deve ser informado os campos: alpha_two_code, name, country, domains, web_pages. O campo "stage-province" não é obrigatório.
<br>

<strong>Listar universidades</strong>
- Rota: localhost:3000/universities
- Método: GET
- Observações:  
  - Só é mostrado 20 universidades por vez 
  - É possível filtrar as universidades por país
- Query Params:
  - page: Número da página. Não é obrigatório, caso ele não seja informado, page sera igual a 1
    - example1: localhost:3000/universities?page=2  
  - country: País. Não é obrigatório, caso ele não seja informado, o programa irá retornar as 20 primeiras universidades cadastradas no sistema
    - example2: localhost:3000/universities?country=Brazil
    - example3: localhost:3000/universities?country=Brazil&page=2
<br>

<strong>Encontrar uma universidade</strong>
- Rota: localhost:3000/universities/:id
- Método: GET
- Params: Deve ser passado o id da universidade como parametro
<br>

<strong>Atualizar uma universidade</strong>
- Rota: localhost:3000/universities/:id
- Método: PUT
- Body: É permitido atualizar: name, web_pages, domains
- Params: Deve ser passado o id da universidade como parametro
<br>

<strong>Deletar uma universidade</strong>
- Rota: localhost:3000/universities/:id
- Método: DELETE
- Params: Deve ser passado o id da universidade como parametro
<br>

## ⚠ Antes de iniciar

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com)
- [NodeJs](https://nodejs.org/en/)
- [MongoDb](https://www.mongodb.com/)

E uma ferramenta operar a aplicação, sugiro o 
[VSCode](https://code.visualstudio.com/).

## 📦 Requerimentos

Node, express, mongoose, dotenv, ts-node-dev, axios, typescript.

## 🚦 Avisos

Para uma maior estabilidade, use node versão 14 ou 16.

SE você não sabe quão versão está em uso na sua máquina, digite isto em seu terminal:

```bash
node --version
```

SE você deseja mudar a versão do Node,
digite isto em seu terminal:

```bash
nvm use 14
```

<h3>OU</h3>

```bash
nvm use 16
```

Verifique se não há nenhuma outra aplicação que está sendo executada na porta :3000

Para ter certeza de que nada está sendo executado nessa porta, digite em seu terminal:

```bash
sudo lsof -i :3000
```

Se você encontrar alguma aplicação sendo executada, termine o processo com o seguinte comando(digite o PID):

```bash
sudo kill -9 PID
```

## 🎲 Instalação

Para iniciar o projeto na sua máquina, é necessário que sua máquina tenha instalado yarn e o git, além de uma versão do node compativel.

Começe clonando o repositório usando git clone:

```
git clone https://github.com/IgorPetersson/integrado_challeng_backend.git
```

Depois disso, digite <em>npm install</em> para instalar todas as dependências:

```bash
npm install
```

Também é preciso criar um arquivo chamado`.env` com as informações do banco de dados, conforme o `.env.example`.

Para popular o banco de dados, digite em seu terminal:

```bash
npm run population
```

Para iniciar a aplicação em sua máquina local, digite em seu terminal:

```bash
npm run dev
```

### <h2> 🛠 Tecnologias </h2>

As seguintes ferramentas foram usadas na construção do projeto:

- [Insomnia](https://insomnia.rest)
- [VSCode](https://code.visualstudio.com)


### <h2> 📋 Termos de uso </h2>

<p>Este projeto não tem termos de uso.</p>

<div align="center">
  <a href="https://choosealicense.com/licenses/mit/" target="_blank"><img src="https://img.shields.io/static/v1?label=License&message=MIT&color=informational"></a>
 </div>

<h2 id="desenvolvedores">🧑‍💻 Equipe de Desenvolvimento</h2>
<br>   
<div align="center">
<table align="center">
  <tr>
    <td align="center"><a href="https://gitlab.com/IgorPetersson">
      <img src="https://ca.slack-edge.com/TQZR39SET-U01QNUDCN7M-24007b058eea-512" style="border-radius: 50%" width="100px" alt="Imagem do perfil de Igor"/>
      <br />
      <sub><b>Igor P. Cardoso e Santos</b></sub>
      <br />
    </td>
</table>
</div>

[Voltar para o topo 🔝](#top)
