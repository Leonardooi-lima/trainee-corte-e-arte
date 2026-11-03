import './Avaliacoes.css'
import {
  clientes,
  clientesLinhaUm,
  clientesLinhaDois,
  clientesLinhaTres,
} from '../../data/clientes'
import estrela from '../../assets/avaliacoes/estrela.png'
import titulo from '../../assets/avaliacoes/titulo.png'
import tituloPequeno from '../../assets/avaliacoes/titulo-pequeno.png'
import linhaTitulo from '../../assets/avaliacoes/linha-titulo.png'

const linkAvaliacoesGoogle =
  'https://www.google.com/maps/search/?api=1&query=barbearia'

function Estrelas() {
  return (
    <div className="avaliacoes-estrelas" aria-label="5 estrelas">
      <img src={estrela} alt="" />
      <img src={estrela} alt="" />
      <img src={estrela} alt="" />
      <img src={estrela} alt="" />
      <img src={estrela} alt="" />
    </div>
  )
}

function CardAvaliacao({ cliente }) {
  return (
    <div className="avaliacoes-card">
      <div className="avaliacoes-cabecalho-card">
        <img
          className="avaliacoes-foto-cliente"
          src={cliente.foto}
          alt={`Foto de ${cliente.nome}`}
        />

        <div>
          <p className="avaliacoes-nome">{cliente.nome}</p>
          <Estrelas />
        </div>
      </div>

      <p className="avaliacoes-texto">“{cliente.avaliacao}”</p>
    </div>
  )
}

function FileiraAvaliacoes({ posicao, clientesDaFileira }) {
  return (
    <div className={`avaliacoes-fileira avaliacoes-fileira-${posicao}`}>
      {clientesDaFileira.map((cliente, indice) => (
        <CardAvaliacao
          cliente={cliente}
          key={`${cliente.nome}-${indice}`}
        />
      ))}
    </div>
  )
}

export default function Avaliacoes() {
  return (
    <section className="avaliacoes" aria-label="Avaliações de clientes">
      <header className="avaliacoes-cabecalho">
        <img
          className="avaliacoes-titulo-pequeno"
          src={tituloPequeno}
          alt="A experiência de quem confia"
        />
        <h2 className="avaliacoes-titulo">
          <img
            src={titulo}
            alt="O que nossos clientes falam sobre nosso trabalho"
          />
        </h2>
        <img className="avaliacoes-linha-titulo" src={linhaTitulo} alt="" />
      </header>

      <div className="avaliacoes-desktop">
        <FileiraAvaliacoes
          posicao="esquerda"
          clientesDaFileira={clientesLinhaUm}
        />
        <FileiraAvaliacoes
          posicao="direita"
          clientesDaFileira={clientesLinhaDois}
        />
        <FileiraAvaliacoes
          posicao="esquerda"
          clientesDaFileira={clientesLinhaTres}
        />
      </div>

      <div className="avaliacoes-blur avaliacoes-blur-esquerda">
        <span className="avaliacoes-blur-leve" />
        <span className="avaliacoes-blur-medio" />
        <span className="avaliacoes-blur-forte" />
      </div>

      <div className="avaliacoes-blur avaliacoes-blur-direita">
        <span className="avaliacoes-blur-leve" />
        <span className="avaliacoes-blur-medio" />
        <span className="avaliacoes-blur-forte" />
      </div>

      <div className="avaliacoes-mobile">
        <CardAvaliacao cliente={clientes.rafael} />
        <CardAvaliacao cliente={clientes.lucas} />
        <CardAvaliacao cliente={clientes.felipe} />
      </div>

      <a
        className="avaliacoes-botao-google"
        href={linkAvaliacoesGoogle}
        target="_blank"
        rel="noreferrer"
      >
        <span>Ver avaliações no Google</span>
        <span className="avaliacoes-seta" aria-hidden="true">
          ↗
        </span>
      </a>
    </section>
  )
}
