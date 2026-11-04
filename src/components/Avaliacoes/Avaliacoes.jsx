import { useEffect, useRef, useState } from 'react'
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
  const fileiraRef = useRef(null)
  const [repeticoes, setRepeticoes] = useState(1)

  useEffect(() => {
    const fileira = fileiraRef.current

    const ajustarRepeticoes = () => {
      const grupo = fileira.querySelector('.avaliacoes-grupo')
      const card = grupo.querySelector('.avaliacoes-card')
      const larguraCard = card.getBoundingClientRect().width
      if (!larguraCard) return

      const intervalo = parseFloat(getComputedStyle(grupo).columnGap) || 0
      const deslocamento =
        parseFloat(
          getComputedStyle(fileira).getPropertyValue('--deslocamento-inicial'),
        ) || 0
      const larguraSequencia =
        clientesDaFileira.length * (larguraCard + intervalo)

      setRepeticoes(
        Math.max(
          1,
          Math.ceil(
            (fileira.getBoundingClientRect().width + deslocamento) /
              larguraSequencia,
          ),
        ),
      )
    }

    ajustarRepeticoes()

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', ajustarRepeticoes)
      return () => window.removeEventListener('resize', ajustarRepeticoes)
    }

    const observer = new ResizeObserver(ajustarRepeticoes)
    observer.observe(fileira)
    return () => observer.disconnect()
  }, [clientesDaFileira.length])

  const sequencia = Array.from(
    { length: repeticoes },
    () => clientesDaFileira,
  ).flat()

  return (
    <div
      ref={fileiraRef}
      className={`avaliacoes-fileira avaliacoes-fileira-${posicao}`}
    >
      <div
        className="avaliacoes-trilha"
        style={{ '--duracao': `${sequencia.length * 6}s` }}
      >
        {[0, 1].map((copia) => (
          <div
            className="avaliacoes-grupo"
            aria-hidden={copia === 1 ? true : undefined}
            key={copia}
          >
            {sequencia.map((cliente, indice) => (
              <CardAvaliacao
                cliente={cliente}
                key={`${cliente.nome}-${indice}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Avaliacoes() {
  return (
    <section
      id="avaliacoes"
      className="avaliacoes"
      aria-label="Avaliações de clientes"
    >
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
