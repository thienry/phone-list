import React, { Fragment } from "react";
import dayjs from "dayjs";

const About = () => {
  return (
    <Fragment>
      <section className="container">
        <h1 className="about-app">Sobre este App</h1>
        <p className="lead">
          <strong>Phone List</strong> É Uma Aplicação alternativa ao google Contacts. O gerenciador de contatos Phone List permite que os usuários mantenham uma lista de contatos na web de forma segura e usando tudo de mais moderno em tecnologia de desenvolvimento de aplicações.
        </p>
        <p className="lead">
          É concedida permissão, gratuitamente, a qualquer pessoa que obtenha
          uma cópia deste software e dos arquivos de documentação associados (o
          "Software"), para lidar com o Software sem restrições, incluindo, sem
          limitação, os direitos de uso, cópia, modificação e fusão , publicar,
          distribuir, sublicenciar e / ou vender cópias do Software e permitir
          que as pessoas a quem o Software é fornecido o façam, sujeitas às
          seguintes condições:
        </p>
        <p className="lead">
          O aviso de copyright acima e este aviso de permissão devem ser
          incluídos em todas as cópias ou partes substanciais do Software.
        </p>
        <p className="lead">
          O SOFTWARE É FORNECIDO "NO ESTADO EM QUE SE ENCONTRA", SEM NENHUM TIPO
          DE GARANTIA, EXPRESSA OU IMPLÍCITA, INCLUINDO, MAS NÃO SE LIMITANDO ÀS
          GARANTIAS DE COMERCIALIZAÇÃO, ADEQUAÇÃO A UM FIM ESPECÍFICO E NÃO
          VIOLAÇÃO. EM NENHUMA CIRCUNSTÂNCIA, OS AUTORES OU PROPRIETÁRIOS DE
          DIREITOS DE AUTOR PODERÃO SER RESPONSABILIZADOS POR QUAISQUER
          RECLAMAÇÕES, DANOS OU OUTRAS RESPONSABILIDADES, QUER EM ACÇÃO DE
          CONTRATO, DELITO OU DE OUTRA FORMA, DECORRENTES DE, OU EM CONEXÃO COM
          O SOFTWARE OU O USO OU OUTRAS NEGOCIAÇÕES NO PROGRAMAS.
        </p>
        <p className="lead">MIT license</p>
        <p className="lead">Versão: 1.0.0</p>
        <p className="lead">
          Copyright {dayjs().year()} &copy;
          <a
            href="http://thiagotec.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            ThiagoTec
          </a>
        </p>
      </section>
    </Fragment>
  );
};

export default About;