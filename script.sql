drop database fitcard;
CREATE DATABASE fitcard;
use fitcard;

create table categoria(
	id int not null auto_increment primary key,
    nome varchar (30) unique
);

create table estabelecimento(
	id int not null auto_increment primary key,
    razao_social varchar (100) unique,
    nome_fantasia varchar (100),
    cnpj varchar (18),
    email varchar (50),
    endereco varchar (200),
    cidade varchar (100),
    estado varchar (30),
    telefone varchar (30),
    data_de_cadastro date,
    categoria_id int,
    status varchar(7),
    agencia varchar (30),
    conta varchar (30),
    
    constraint fk_estabelecimento_categoria foreign key (categoria_id) references categoria (id)
    
);

insert into categoria (nome) values('Supermercado'),('Restaurante'),('Borracharia'),('Posto'),('Oficina')

