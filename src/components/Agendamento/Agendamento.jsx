import { useState, useRef } from 'react'
import { useEhDesktop } from '../../hooks/useEhDesktop.js'
import './Agendamento.css'

const OPCOES_SERVICO = [
  { valor: 'cabelo', rotulo: 'Cabelo' },
  { valor: 'barba', rotulo: 'Barba' },
  { valor: 'sobrancelha', rotulo: 'Sobrancelha' },
]

const OPCOES_PROFISSIONAL = [
  { valor: 'Alexandre Saraiva Carniato', rotulo: 'Alexandre Saraiva Carniato' },
  { valor: 'Luan Pereira', rotulo: 'Luan Pereira' },
  { valor: 'Cauã de Oliveira', rotulo: 'Cauã de Oliveira' },
]

const HORARIOS = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00']

export default function Agendamento({ servicoInicial, profissionalInicial }) {
  const ref = useRef(null)
  const desktop = useEhDesktop(ref)

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [data, setData] = useState('')
  const [horario, setHorario] = useState('')

  const hoje = new Date().toISOString().split('T')[0]

  // Estado local dos campos. As pré-seleções de servicoInicial e
  // profissionalInicial (vindas dos cards US03/US06) têm precedência quando
  // fornecidas, permitindo que o usuário continue alterando livremente.
  const [servicoLocal, setServicoLocal] = useState(servicoInicial || '')
  const [profissionalLocal, setProfissionalLocal] = useState(
    profissionalInicial || ''
  )

  const servicoExibido = servicoInicial || servicoLocal
  const profissionalExibido = profissionalInicial || profissionalLocal

  const completo =
    nome &&
    telefone &&
    servicoExibido &&
    profissionalExibido &&
    data &&
    horario

  return (
    <section
      ref={ref}
      id="agendamento"
      className={`agendamento ${desktop ? 'agendamento--desktop' : 'agendamento--mobile'}`}
    >
      <div className="agendamento-conteudo">
        <div className="agendamento-texto">
          <h2 className="agendamento-titulo">
            Seu pr\u00f3ximo corte come\u00e7a aqui.
          </h2>
          <p className="agendamento-subtitulo">
            Escolha seu servi\u00e7o e solicite um hor\u00e1rio com nossa equipe.
          </p>
        </div>

        <div className="agendamento-imagem" aria-hidden="true">
          <div className="agendamento-imagem-placeholder" />
        </div>

        <form className="agendamento-form" noValidate onSubmit={(e) => e.preventDefault()}>
          <div className="agendamento-campo">
            <label htmlFor="agendamento-nome" className="agendamento-label">Nome do cliente</label>
            <input
              id="agendamento-nome"
              type="text"
              className="agendamento-input"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              aria-required="true"
            />
          </div>

          <div className="agendamento-campo">
            <label htmlFor="agendamento-telefone" className="agendamento-label">Telefone de contato</label>
            <input
              id="agendamento-telefone"
              type="tel"
              className="agendamento-input"
              placeholder="+55 11 0000 0000"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
              aria-required="true"
            />
          </div>

          <div className="agendamento-campo">
            <label htmlFor="agendamento-servico" className="agendamento-label">Servi\u00e7o desejado</label>
            <select
              id="agendamento-servico"
              className="agendamento-select"
              value={servicoExibido}
              onChange={(e) => setServicoLocal(e.target.value)}
              required
              aria-required="true"
            >
              <option value="">Selecione um servi\u00e7o</option>
              {OPCOES_SERVICO.map((opcao) => (
                <option key={opcao.valor} value={opcao.valor}>
                  {opcao.rotulo}
                </option>
              ))}
            </select>
          </div>

          <div className="agendamento-campo">
            <label htmlFor="agendamento-profissional" className="agendamento-label">Profissional desejado</label>
            <select
              id="agendamento-profissional"
              className="agendamento-select"
              value={profissionalExibido}
              onChange={(e) => setProfissionalLocal(e.target.value)}
              required
              aria-required="true"
            >
              <option value="">Selecione um profissional</option>
              {OPCOES_PROFISSIONAL.map((opcao) => (
                <option key={opcao.valor} value={opcao.valor}>
                  {opcao.rotulo}
                </option>
              ))}
            </select>
          </div>

          <div className="agendamento-campo">
            <label htmlFor="agendamento-data" className="agendamento-label">Data desejada</label>
            <input
              id="agendamento-data"
              type="date"
              className="agendamento-input"
              min={hoje}
              value={data}
              onChange={(e) => setData(e.target.value)}
              required
              aria-required="true"
            />
          </div>

          <div className="agendamento-campo">
            <label htmlFor="agendamento-horario" className="agendamento-label">Hor\u00e1rio desejado</label>
            <select
              id="agendamento-horario"
              className="agendamento-select"
              value={horario}
              onChange={(e) => setHorario(e.target.value)}
              required
              aria-required="true"
            >
              <option value="">Selecione um hor\u00e1rio</option>
              {HORARIOS.map((h) => (
                <option key={h} value={h}>{h}</option>
              ))}
            </select>
          </div>

          <button type="submit" className="agendamento-botao" disabled={!completo}>
            Agendar agora
          </button>
        </form>
      </div>
    </section>
  )
}
