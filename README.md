## 🤖 API_mycontacts

## Criando API para app mycontacts, curso Jstack.

Desenvolvendo uma API para o aplicativo MyContacts do curso Jstack. Esta API foi projetada para ser integralmente integrada ao aplicativo MyContacts, permitindo um gerenciamento eficiente de contatos.

## Visão Geral da API MyContacts:

A API MyContacts é uma interface de programação de aplicativos criada para o aplicativo móvel MyContacts, desenvolvido como parte do curso Jstack. Ela possibilita a interação entre o aplicativo e um servidor backend, permitindo que os usuários realizem diversas operações relacionadas aos seus contatos de maneira fácil e eficaz.

## O que são middleware:

Imagine o sistema operacional e os aplicativos como um grande festival ao ar livre, onde milhares de pessoas estão presentes para desfrutar das atrações. Agora, considere que cada pessoa fala um idioma diferente, tem diferentes gostos musicais e preferências alimentares. Como organizador desse festival, você precisa garantir que todas as pessoas possam se comunicar e interagir entre si, independentemente de suas diferenças.

Aqui é onde entra o middleware. Ele é como uma equipe de intérpretes, organizadores e guias que atuam entre os visitantes do festival e as várias atrações. Esses intermediários trabalham nos bastidores, traduzindo as necessidades e preferências dos visitantes para os diferentes estandes e atrações, garantindo que todos possam aproveitar o evento ao máximo.

Os diferentes tipos de middleware seriam como diferentes equipes de intérpretes especializados. Por exemplo, você tem uma equipe que se concentra em traduzir solicitações de comida, outra equipe que lida com preferências musicais e até mesmo uma equipe que cuida das transações financeiras. Cada equipe de middleware utiliza protocolos específicos, como traduzir do idioma A para o idioma B, ou converter do formato C para o formato D, para garantir que a comunicação entre os visitantes e as atrações seja perfeita.

Assim como o middleware é crucial para garantir que o festival funcione sem problemas, permitindo que as pessoas desfrutem das várias atrações e interajam facilmente, ele também desempenha um papel semelhante no mundo da tecnologia. Ele age como uma camada de tradução e comunicação entre os sistemas operacionais e os aplicativos, assegurando que os dados possam ser compartilhados e gerenciados de maneira eficiente em um ambiente distribuído.

## Docker:

Docker é uma plataforma de virtualização de contêineres que permite empacotar, distribuir e executar aplicativos e suas dependências de forma isolada. Os contêineres são unidades de software que contêm tudo o que é necessário para executar um aplicativo, incluindo o código, runtime, bibliotecas e configurações, permitindo que os aplicativos sejam executados de maneira consistente em diferentes ambientes.

## Principais comandos Docker:

docker pull [nome_da_imagem]: Baixa uma imagem de um repositório para o seu sistema.

docker run [opções] [nome_da_imagem]: Executa um contêiner a partir de uma imagem.

docker ps: Lista os contêineres em execução.

docker images: Lista as imagens disponíveis no sistema.

docker stop [ID_do_contêiner]: Interrompe a execução de um contêiner.

docker start [ID_do_contêiner]: Inicia um contêiner parado.

docker restart [ID_do_contêiner]: Reinicia um contêiner.

docker build [caminho_do_dockerfile]: Constrói uma nova imagem a partir de um Dockerfile.

docker exec [opções] [ID_do_contêiner] [comando]: Executa um comando dentro de um contêiner em execução.

docker rm [ID_do_contêiner]: Remove um contêiner.

docker rmi [nome_da_imagem]: Remove uma imagem do sistema.

docker network [comandos]: Gerencia redes Docker.

docker volume [comandos]: Gerencia volumes Docker para persistência de dados.

docker-compose [comandos]: Gerencia aplicativos multi-contêiner usando um arquivo de configuração.

## Comando para listar base de dados do postgres:

CREATE DATABASE DB_Endereco;

CREATE TABLE tbPais( bgId INT NOT NULL (NOT NULL indica que o campo não pode ser nulo, se for
permitido nulo é só colocar NULL) ,vcDescricao character varying(50) NOT NULL , PRIMARY KEY
(bgId) (O comando PRIMARY KEY indica que o campo é chave primária, o campo não permiti valor
duplicado, é único na tabela) )

CREATE TABLE tbEstado( bgId INT NOT NULL ,vcDescricao character varying(70) NOT NULL ,vcUF
character varying(2) NULL ,bgIdPais INT NOT NULL , PRIMARY KEY(bgId) ) CREATE TABLE tbCidade
( bgId INT NOT NULL ,vcDescricao character varying(70) NOT NULL ,bgIdEstado INT NOT NULL
, PRIMARY KEY(bgId) ) CREATE TABLE tbBairro( bgId INT NOT NULL ,vcDescricao character
varying(70) NOT NULL ,bgIdCidade INT NOT NULL , PRIMARY KEY(bgId) ) CREATE TABLE tbLogradouro
( bgId INT NOT NULL ,vcDescricao character varying(70) NOT NULL ,vcCEP character varying(8)
NOT NULL ,bgIdBairro INT NOT NULL , PRIMARY KEY(bgId) )

Veja mais em https://www.devmedia.com.br/principais-comandos-sql-com-postgresql/23366.
