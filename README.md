# 👴🏻  Inova-X Care: Desenvolvimento do Site

Bem-vindo ao repositório de desenvolvimento do site da Inova-X Care. Este projeto faz parte da Global Solution da NotreDame Intermedica, que foi entregue no 2° Semestres de 2023 do curso de ADS da Faculdade FIAP. Este é um projeto dedicado à saúde dos idosos, destacando o produto exclusivo da Inova-X Care chamado "Life Care".

## 🎯 Visão Geral

O site visa proporcionar uma experiência informativa e interativa, oferecendo recursos que destacam os benefícios e características do "Life Care". Este produto foi desenvolvido pela Inova-X Care com o propósito de melhorar a qualidade de vida dos idosos, proporcionando soluções inovadoras para diversos aspectos de saúde e bem-estar.

## 💻 Tecnologias Utilizadas

O desenvolvimento do site da Inova-X Care empregou as seguintes tecnologias:

* **Sass:** Um pré-processador CSS que oferece uma sintaxe mais poderosa e elegante para o desenvolvimento de estilos.
* **Next.js:** Um framework React que facilita a criação de aplicativos web modernos e eficientes.
* **Eclipse com Backend em Java:** Eclipse foi adotado como ambiente de desenvolvimento integrado (IDE) para a criação do backend em Java, proporcionando robustez e escalabilidade.
* **Oracle Developer Database:** Utilizado para a gestão e armazenamento eficiente dos dados relacionados aos produtos e usuários.

Estas tecnologias foram escolhidas visando a eficiência no desenvolvimento, aprimorando a experiência do usuário e garantindo a segurança e confiabilidade do sistema.

## 📌 Link do Repositório do Back-End
O código-fonte do backend está disponível no seguinte repositório:

```bash
https://github.com/laiscrz/global-java-backend
```

## 🔗 Link do Video
Segue o link do vídeo enviado na disciplina de Domain Driven Design, apresentando o software em funcionamento:

```bash
https://www.youtube.com/watch?v=GRBNe07OxSo
```

## 🔑 Intruções de Acesso
### ⚠️ Observação Geral
Para efetuar o Login Bem-Sucedido, é necessário estar cadastrado no site.

### 📋 Cadastro
##
Ao efetuar o cadastro do cliente, preenchendo todas as informações corretamente, o sistema gera um IdCliente aleatório. Em seguida, usando o método `POST`, os dados são armazenados no banco de dados por meio do backend Java. Posteriormente, essas informações são armazenadas no SessionStorage para serem utilizadas durante a sessão.

*Um exemplo de Json, de um cliente ja cadastrado no Banco:*

``` bash
    "idCliente": "ADMIN",
    "nome": "ADMIN",
    "genero": "outros",
    "endereco": "Av G",
    "cpf": "123.456.125-12",
    "email": "admin@gmail.com",
    "senha": "12345678",
    "idDispositivo": "ADM01",
```
*Agora vamos supor, que o João quer se cadastrar no site, e colocando as informações corretas, o Json ficaria:*

``` bash
    "idCliente": "Gerado automaticamente ao completar formulario",
    "nome": "Joao",
    "genero": "masculino",
    "endereco": "av paulista, n1110",
    "cpf": "545.459.785-12",
    "email": "joao@gmail.com",
    "senha": "joao1234",
    "idDispositivo": "ZS782",
```

### 📱 Login
##
Ao preencher as informações no formulário de login, o sistema realiza uma validação das credenciais fornecidas. Primeiramente, obtém a lista de clientes cadastrados no banco de dados por meio de uma requisição **GET**. Após obter a lista, verifica se existe um cliente com o email e senha fornecidos. Se as credenciais coincidirem com algum cliente da lista, o sistema considera o login como bem-sucedido.
No caso de um login bem-sucedido, o cliente encontrado é armazenado no SessionStorage, permitindo que as informações do cliente sejam utilizadas durante a sessão. Uma mensagem informando o sucesso no login é exibida, e o usuário é redirecionado para a página do portal do cliente ('/portalcliente').
Em situações onde as credenciais não são válidas, uma mensagem de erro é exibida no formulário, indicando que o email e/ou a senha fornecidos são inválidos. Nesse caso, o usuário pode revisar as informações e tentar novamente ou optar por se cadastrar caso ainda não tenha uma conta.

*Exemplo de login, ja cadastrado :*
``` bash
    "email": "admin@gmail.com",
    "senha": "12345678",
```

*Vamos supor, que o João quer logar no site, sabendo que ele ja realizou o seu cadastro e colocando as informações corretas.*

``` bash
    "email": "joao@gmail.com",
    "senha": "joao1234",
```

***ETAPAS*** : *Ao inserir, o sistema faz um GET, para verificar se senha e email estão corretos, liberando assim o acesso, para o joão*

### 🤳🏻 Portal do Cliente
##
O Portal do Cliente é uma área personalizada onde os usuários cadastrados no sistema LifeCare podem acessar informações detalhadas sobre seus dispositivos e gerenciar diversas opções de maneira simples e intuitiva. Abaixo estão algumas das principais funcionalidades disponíveis no Portal do Cliente:

#### 🗳️ Verificação de Login
Antes de acessar o Portal do Cliente, é feita uma verificação para garantir que o usuário esteja devidamente autenticado. Isso é realizado através da leitura das informações armazenadas no SessionStorage, que contêm os dados do cliente logado. Caso não haja um login válido, o usuário é redirecionado para a página de login ('/login').

#### 😃 Boas-vindas
Ao acessar o Portal do Cliente, uma mensagem de boas-vindas é exibida, proporcionando uma experiência acolhedora e informativa. Uma imagem ilustrativa complementa essa mensagem, transmitindo uma atmosfera amigável e relacionada aos serviços LifeCare.

#### 🤝 Opções Disponíveis
O Portal do Cliente oferece diversas opções, cada uma associada a uma funcionalidade específica. Abaixo estão algumas dessas opções:

1. ***Cadastrar Dispositivo:*** Permite ao cliente cadastrar um novo dispositivo LifeCare. Usando metodo `POST`.
2. ***Visualizar Dispositivos:*** Exibe uma lista de todos os dispositivos LifeCare registrados. Usando metodos `GET, DELETE, PUT`.
3. ***Cadastrar Cuidador:*** Possibilita o cadastro de um novo cuidador ou responsável. Usando metodos  `POST`.
4. ***Informações do Cuidador:*** Oferece a visualização de informações sobre o cuidador associado à conta. Usando metodos `GET, DELETE, PUT`.
5. ***Gerenciar Diagnósticos:*** Permite a visualização e gerenciamento de diagnósticos relacionados ao dispositivo. Usando metodos `GET, DELETE`.
6. ***Configurações de Conta:*** Facilita a atualização de informações de conta e preferências do cliente. Usando metodos `PUT`
7. ***Histórico Serviços de Manutenção:*** Apresenta o histórico de serviços de manutenção realizados nos dispositivos. Usando metodos `GET, DELETE`
8. ***Histórico de Serviços de Emergência:*** Mostra o histórico de serviços de emergência prestados. Usando metodos `GET, DELETE`
9. ***Sair:*** Permite encerrar a sessão no Portal do Cliente com segurança.

Cada opção é representada por um ícone intuitivo e acompanhada de um título e descrição que fornecem informações sobre sua finalidade.

### ⛔ Encerramento de Sessão
##
A opção "Sair" permite ao cliente encerrar a sessão no Portal do Cliente. Ao selecionar essa opção, o usuário é deslogado, as informações de login são removidas do SessionStorage e uma mensagem informa sobre o encerramento bem-sucedido da sessão.

O Portal do Cliente visa proporcionar uma experiência completa e conveniente, concentrando todas as informações e funcionalidades relevantes em um ambiente online de fácil acesso e navegação.

## 🫂 Integrantes

Aqui estão os membros do grupo e os cargos de cada um durante o desenvolvimento desta Global Solution.

* **RM 551823 - Gustavo Marques Catelan**
  - Turma: 1TDSPI
  - Cargo: Desenvolvedor BackEnd em Python

* **RM 552258 - Laís Alves da Silva Cruz**
  - Turma: 1TDSPI
  - Cargo: Desenvolvedora FrontEnd

* **RM 550790 – Lucas dos Santos Lopes**
  - Turma: 1TDSPI
  - Cargo: Desenvolvedor BackEnd em Java

* **RM 550718 – Murilo Machado**
  - Turma: 1TDSPI
  - Cargo: Desenvolvedor de Banco de Dados

* **RM 97900 – Victor Taborda**
  - Turma: 1TDSPI
  - Cargo: AI and ChatBot

**Observação:** ***Todos os membros contribuíram para a matéria de Software Design & TX.***

