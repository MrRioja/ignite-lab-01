# Ignite Lab I

<p align="center">
  <img src="https://img.shields.io/static/v1?label=ignite&message=lab I&color=blueviolet&style=for-the-badge"/>
  <img src="https://img.shields.io/github/license/MrRioja/ignite-lab-01?color=blueviolet&logo=License&style=for-the-badge"/>
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/MrRioja/ignite-lab-01?color=blueviolet&logo=TypeScript&logoColor=white&style=for-the-badge">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/MrRioja/ignite-lab-01?color=blueviolet&style=for-the-badge">
</p>

<p align="center">
  <a href="#sobre">Sobre</a> •
  <a href="#ignite-lab-i">Ignite Lab I</a> •
  <a href="#instalação">Instalação</a> •
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#autor">Autor</a>  
</p>

## Sobre

Projeto desenvolvido durante o Ignite Lab I, evento criado pela Rocketseat. Um evento 100% online e GRATUITO, com conteúdo exclusivo e INÉDITO.

Ocorreu do dia 04 ao dia 11 de Abril de 2022 e teve como intuito mostrar na prática como construir microsserviços escaláveis com NodeJS e NestJS.

## Ignite Lab I

🚧 **_Em construção_** 🚧

## Instalação

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [Docker](https://www.docker.com/).
Além disso é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### 🏗 Criando o ambiente com Docker

```bash
# Clone este repositório
$ git clone git@github.com:MrRioja/ignite-lab-01.git

# Acesse a pasta do projeto no terminal/cmd
$ cd ignite-lab-01

# Execute o comando abaixo para que o ambiente docker seja criado
$ docker-compose up -d --build

# Com isso teremos a construção do nosso banco de dados, filas do Kafka e outras ferramentas. Para mais detalhes basta acessar o conteúdo do arquivo docker-compose.yml presente na raiz do projeto
```

### 🎲 Rodando o serviço - Classroom

```bash
# Clone este repositório
$ git clone git@github.com:MrRioja/ignite-lab-01.git

# Acesse a pasta do projeto no terminal/cmd
$ cd ignite-lab-01

# Vá para a pasta classroom
$ cd classroom

# Instale as dependências
$ npm install
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ npm run start:dev
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn start:dev

# O serviço iniciará na porta 3334 - acesse <http://localhost:3334>
```

### 🎲 Rodando o serviço - Gateway

```bash
# Clone este repositório
$ git clone git@github.com:MrRioja/ignite-lab-01.git

# Acesse a pasta do projeto no terminal/cmd
$ cd ignite-lab-01

# Vá para a pasta gateway
$ cd gateway

# Instale as dependências
$ npm install
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ npm run start:dev
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn start:dev

# O serviço iniciará na porta 3332 - acesse <http://localhost:3332>
```

### 🎲 Rodando o serviço - Purchase

```bash
# Clone este repositório
$ git clone git@github.com:MrRioja/ignite-lab-01.git

# Acesse a pasta do projeto no terminal/cmd
$ cd ignite-lab-01

# Vá para a pasta purchases
$ cd purchases

# Instale as dependências
$ npm install
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ npm run start:dev
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn start:dev

# O serviço iniciará na porta 3333 - acesse <http://localhost:3333>
```

### 🖥️ Rodando o Front End (Web)

```bash
# Clone este repositório
$ git clone git@github.com:MrRioja/ignite-lab-01.git

# Acesse a pasta do projeto no terminal/cmd
$ cd ignite-lab-01

# Vá para a pasta web
$ cd web

# Instale as dependências
$ npm install
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn dev

# O servidor iniciará na porta 3000 - acesse <http://localhost:3000>
```

## Tecnologias

<img align="left" src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" height="75" />

<img align="left" src="https://oe9nbfytu.qnssl.com/c/d113d1ce8914335fb491e7e034cf3681" alt="NestJS" height="75"/>

<img align="left" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1280px-Nextjs-logo.svg.png" alt="NextJS" height="75"/>

<img align="left" src="https://www.freelogovectors.net/wp-content/uploads/2021/01/graphql-logo-freelogovectors.net_.png" alt="GraphQL" height="75"/>

<br><br><br><br>

## Autor

<div align="center">
<img src="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/55336456?v=4&h=100&w=100&fit=cover&mask=circle&maxage=7d" />
<h1>Luiz Rioja</h1>
<strong>Backend Developer</strong>
<br/>
<br/>

<a href="https://linkedin.com/in/luizrioja" target="_blank">
<img alt="LinkedIn" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>

<a href="https://github.com/mrrioja" target="_blank">
<img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/>
</a>

<a href="mailto:lulyrioja@gmail.com?subject=Fala%20Dev" target="_blank">
<img alt="Gmail" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
</a>

<a href="https://api.whatsapp.com/send?phone=5511933572652" target="_blank">
<img alt="WhatsApp" src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/>
</a>

<a href="https://join.skype.com/invite/tvBbOq03j5Uu" target="_blank">
<img alt="Skype" src="https://img.shields.io/badge/SKYPE-%2300AFF0.svg?style=for-the-badge&logo=Skype&logoColor=white"/>
</a>

<br/>
<br/>
</div>
