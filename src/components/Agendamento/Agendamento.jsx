import { useRef, useState } from 'react'
import { useEhDesktop } from '../../hooks/useEhDesktop.js'
import imagemCut from '../../assets/agendamento/cut.webp'
import './Agendamento.css'

const OPCOES_SERVICO = [
  { valor: 'cabelo', rotulo: 'Cabelo' },
  { valor: 'barba', rotulo: 'Barba' },
  { valor: 'sobrancelha', rotulo: 'Sobrancelha' },
]

const OPCOES_PROFISSIONAL = [
  {
    valor: 'Alexandre Saraiva Carniato',
    rotulo: 'Alexandre Saraiva Carniato',
  },
  { valor: 'Luan Pereira', rotulo: 'Luan Pereira' },
  { valor: 'Cauã de Oliveira', rotulo: 'Cauã de Oliveira' },
]

const HORARIOS = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00']

function obterDataLocal() {
  const agora = new Date()
  const ano = agora.getFullYear()
  const mes = String(agora.getMonth() + 1).padStart(2, '0')
  const dia = String(agora.getDate()).padStart(2, '0')

  return `${ano}-${mes}-${dia}`
}

function valorExiste(valor, opcoes) {
  return opcoes.some((opcao) => opcao.valor === valor)
}

function horarioJaPassou(data, horario) {
  if (!data || !horario) return false

  const [ano, mes, dia] = data.split('-').map(Number)
  const [hora, minuto] = horario.split(':').map(Number)
  const dataDoHorario = new Date(ano, mes - 1, dia, hora, minuto)

  return dataDoHorario < new Date()
}

export default function Agendamento({
  servicoInicial = '',
  profissionalInicial = '',
}) {
  const ref = useRef(null)
  const desktop = useEhDesktop(ref)

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  // null indica que o usuário ainda não substituiu a pré-seleção recebida.
  // Assim, novas props são refletidas sem sincronizar estado via useEffect.
  const [servicoLocal, setServicoLocal] = useState(null)
  const [profissionalLocal, setProfissionalLocal] = useState(null)
  const [data, setData] = useState('')
  const [horario, setHorario] = useState('')
  const [errors, setErrors] = useState({})
  const [mostrandoPrevia, setMostrandoPrevia] = useState(false)
  const [mensagemCopiada, setMensagemCopiada] = useState(false)

  const hoje = obterDataLocal()
  const telefoneLimpo = telefone.replace(/\D/g, '')
  const telefoneValido = /^\d{10,11}$/.test(telefoneLimpo)

  // A pré-seleção externa é usada até o usuário escolher outra opção.
  const servicoExibido =
    servicoLocal ??
    (valorExiste(servicoInicial, OPCOES_SERVICO) ? servicoInicial : '')
  const profissionalExibido =
    profissionalLocal ??
    (valorExiste(profissionalInicial, OPCOES_PROFISSIONAL)
      ? profissionalInicial
      : '')

  const servicoRotulo =
    OPCOES_SERVICO.find((opcao) => opcao.valor === servicoExibido)?.rotulo || ''
  const profissionalRotulo =
    OPCOES_PROFISSIONAL.find(
      (opcao) => opcao.valor === profissionalExibido,
    )?.rotulo || ''

  function validarCampos() {
    const novosErros = {}

    if (!nome.trim()) {
      novosErros.nome = 'Informe o seu nome.'
    }

    if (!telefone.trim()) {
      novosErros.telefone = 'Informe o telefone de contato.'
    } else if (!telefoneValido) {
      novosErros.telefone =
        'Telefone inválido. Informe DDD e número (10 ou 11 dígitos).'
    }

    if (!valorExiste(servicoExibido, OPCOES_SERVICO)) {
      novosErros.servico = 'Selecione um serviço válido.'
    }

    if (!valorExiste(profissionalExibido, OPCOES_PROFISSIONAL)) {
      novosErros.profissional = 'Selecione um profissional válido.'
    }

    if (!data) {
      novosErros.data = 'Selecione uma data.'
    } else if (data < hoje) {
      novosErros.data = 'Não é possível selecionar uma data passada.'
    }

    if (!HORARIOS.includes(horario)) {
      novosErros.horario = 'Selecione um horário.'
    } else if (horarioJaPassou(data, horario)) {
      novosErros.horario = 'Selecione um horário que ainda não passou.'
    }

    setErrors(novosErros)
    return Object.keys(novosErros).length === 0
  }

  function lidarSubmit(evento) {
    evento.preventDefault()

    if (validarCampos()) {
      setMostrandoPrevia(true)
    } else {
      setMostrandoPrevia(false)
    }
  }

  function lidarEditarNovamente() {
    setMostrandoPrevia(false)
    setMensagemCopiada(false)
  }

  function gerarMensagemSolicitacao() {
    return [
      '*Solicitação de Agendamento — Corte & Arte*',
      '',
      `*Cliente:* ${nome.trim()}`,
      `*Telefone:* ${telefone.trim()}`,
      `*Serviço:* ${servicoRotulo}`,
      `*Profissional:* ${profissionalRotulo}`,
      `*Data:* ${data}`,
      `*Horário:* ${horario}`,
      '',
      '_(Esta solicitação é demonstrativa e não representa uma reserva confirmada.)_',
    ].join('\n')
  }

  function obterUrlWhatsApp() {
    const textoMensagem = encodeURIComponent(gerarMensagemSolicitacao())
    const numeroTeste = (import.meta.env.VITE_WHATSAPP_NUMERO || '').replace(
      /\D/g,
      '',
    )

    return numeroTeste
      ? `https://wa.me/${numeroTeste}?text=${textoMensagem}`
      : `https://wa.me/?text=${textoMensagem}`
  }

  async function lidarCopiarMensagem() {
    try {
      await navigator.clipboard.writeText(gerarMensagemSolicitacao())
      setMensagemCopiada(true)
      setTimeout(() => {
        setMensagemCopiada(false)
      }, 3000)
    } catch {
      setMensagemCopiada(false)
    }
  }

  function atualizarCampo(setter, campo, valor) {
    setter(valor)
    setErrors((errosAtuais) => {
      if (!errosAtuais[campo]) return errosAtuais

      const novosErros = { ...errosAtuais }
      delete novosErros[campo]
      return novosErros
    })
  }

  return (
    <section
      ref={ref}
      id="agendamento"
      className={`agendamento ${
        desktop ? 'agendamento--desktop' : 'agendamento--mobile'
      }`}
      aria-labelledby="agendamento-titulo"
    >
      <div className="agendamento-conteudo">
        <div className="agendamento-texto">
          <h2 id="agendamento-titulo" className="agendamento-titulo">
            Seu próximo corte começa aqui.
          </h2>
          <p className="agendamento-subtitulo">
            Escolha seu serviço e solicite um horário com nossa equipe.
          </p>
        </div>

        <div className="agendamento-imagem">
          <img
            src={imagemCut}
            alt="Profissional realizando corte de cabelo na barbearia Corte & Arte"
            className="agendamento-imagem-foto"
          />
        </div>

        {mostrandoPrevia ? (
          <div className="agendamento-previa" aria-live="polite">
            <h3 className="agendamento-previa-titulo">
              Prévia da solicitação
            </h3>

            <div className="agendamento-previa-item">
              <span className="agendamento-previa-label">Nome:</span>
              <span className="agendamento-previa-valor">{nome.trim()}</span>
            </div>
            <div className="agendamento-previa-item">
              <span className="agendamento-previa-label">Telefone:</span>
              <span className="agendamento-previa-valor">{telefone}</span>
            </div>
            <div className="agendamento-previa-item">
              <span className="agendamento-previa-label">Serviço:</span>
              <span className="agendamento-previa-valor">{servicoRotulo}</span>
            </div>
            <div className="agendamento-previa-item">
              <span className="agendamento-previa-label">Profissional:</span>
              <span className="agendamento-previa-valor">
                {profissionalRotulo}
              </span>
            </div>
            <div className="agendamento-previa-item">
              <span className="agendamento-previa-label">Data:</span>
              <span className="agendamento-previa-valor">{data}</span>
            </div>
            <div className="agendamento-previa-item">
              <span className="agendamento-previa-label">Horário:</span>
              <span className="agendamento-previa-valor">{horario}</span>
            </div>

            <p className="agendamento-previa-aviso">
              Esta solicitação é demonstrativa e não representa uma reserva
              confirmada.
            </p>

            <div className="agendamento-previa-acoes">
              <a
                className="agendamento-botao agendamento-botao-whatsapp"
                href={obterUrlWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
              >
                Compartilhar via WhatsApp
              </a>

              <button
                className="agendamento-botao agendamento-botao-copiar"
                onClick={lidarCopiarMensagem}
                type="button"
              >
                {mensagemCopiada ? 'Mensagem copiada!' : 'Copiar mensagem'}
              </button>

              <button
                className="agendamento-botao agendamento-botao-editar"
                onClick={lidarEditarNovamente}
                type="button"
              >
                Editar informações
              </button>
            </div>
          </div>
        ) : (
          <form
            className="agendamento-form"
            noValidate
            onSubmit={lidarSubmit}
          >
            <div className="agendamento-campo">
              <label htmlFor="agendamento-nome" className="agendamento-label">
                Nome do cliente
              </label>
              <input
                id="agendamento-nome"
                type="text"
                autoComplete="name"
                className={`agendamento-input ${
                  errors.nome ? 'agendamento-input-erro' : ''
                }`}
                placeholder="Seu nome"
                value={nome}
                onChange={(evento) =>
                  atualizarCampo(setNome, 'nome', evento.target.value)
                }
                required
                aria-invalid={Boolean(errors.nome)}
                aria-describedby={errors.nome ? 'erro-nome' : undefined}
              />
              {errors.nome && (
                <span id="erro-nome" className="agendamento-erro" role="alert">
                  {errors.nome}
                </span>
              )}
            </div>

            <div className="agendamento-campo">
              <label
                htmlFor="agendamento-telefone"
                className="agendamento-label"
              >
                Telefone de contato
              </label>
              <input
                id="agendamento-telefone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                className={`agendamento-input ${
                  errors.telefone ? 'agendamento-input-erro' : ''
                }`}
                placeholder="(00) 00000-0000"
                value={telefone}
                onChange={(evento) =>
                  atualizarCampo(setTelefone, 'telefone', evento.target.value)
                }
                required
                aria-invalid={Boolean(errors.telefone)}
                aria-describedby={
                  errors.telefone ? 'erro-telefone' : undefined
                }
              />
              {errors.telefone && (
                <span
                  id="erro-telefone"
                  className="agendamento-erro"
                  role="alert"
                >
                  {errors.telefone}
                </span>
              )}
            </div>

            <div className="agendamento-campo">
              <label
                htmlFor="agendamento-servico"
                className="agendamento-label"
              >
                Serviço desejado
              </label>
              <select
                id="agendamento-servico"
                className={`agendamento-select ${
                  errors.servico ? 'agendamento-select-erro' : ''
                }`}
                value={servicoExibido}
                onChange={(evento) =>
                  atualizarCampo(
                    setServicoLocal,
                    'servico',
                    evento.target.value,
                  )
                }
                required
                aria-invalid={Boolean(errors.servico)}
                aria-describedby={errors.servico ? 'erro-servico' : undefined}
              >
                <option value="">Selecione um serviço</option>
                {OPCOES_SERVICO.map((opcao) => (
                  <option key={opcao.valor} value={opcao.valor}>
                    {opcao.rotulo}
                  </option>
                ))}
              </select>
              {errors.servico && (
                <span
                  id="erro-servico"
                  className="agendamento-erro"
                  role="alert"
                >
                  {errors.servico}
                </span>
              )}
            </div>

            <div className="agendamento-campo">
              <label
                htmlFor="agendamento-profissional"
                className="agendamento-label"
              >
                Profissional desejado
              </label>
              <select
                id="agendamento-profissional"
                className={`agendamento-select ${
                  errors.profissional ? 'agendamento-select-erro' : ''
                }`}
                value={profissionalExibido}
                onChange={(evento) =>
                  atualizarCampo(
                    setProfissionalLocal,
                    'profissional',
                    evento.target.value,
                  )
                }
                required
                aria-invalid={Boolean(errors.profissional)}
                aria-describedby={
                  errors.profissional ? 'erro-profissional' : undefined
                }
              >
                <option value="">Selecione um profissional</option>
                {OPCOES_PROFISSIONAL.map((opcao) => (
                  <option key={opcao.valor} value={opcao.valor}>
                    {opcao.rotulo}
                  </option>
                ))}
              </select>
              {errors.profissional && (
                <span
                  id="erro-profissional"
                  className="agendamento-erro"
                  role="alert"
                >
                  {errors.profissional}
                </span>
              )}
            </div>

            <div className="agendamento-campo">
              <label htmlFor="agendamento-data" className="agendamento-label">
                Data desejada
              </label>
              <input
                id="agendamento-data"
                type="date"
                className={`agendamento-input ${
                  errors.data ? 'agendamento-input-erro' : ''
                }`}
                min={hoje}
                value={data}
                onChange={(evento) =>
                  atualizarCampo(setData, 'data', evento.target.value)
                }
                required
                aria-invalid={Boolean(errors.data)}
                aria-describedby={errors.data ? 'erro-data' : undefined}
              />
              {errors.data && (
                <span id="erro-data" className="agendamento-erro" role="alert">
                  {errors.data}
                </span>
              )}
            </div>

            <div className="agendamento-campo">
              <label
                htmlFor="agendamento-horario"
                className="agendamento-label"
              >
                Horário desejado
              </label>
              <select
                id="agendamento-horario"
                className={`agendamento-select ${
                  errors.horario ? 'agendamento-select-erro' : ''
                }`}
                value={horario}
                onChange={(evento) =>
                  atualizarCampo(setHorario, 'horario', evento.target.value)
                }
                required
                aria-invalid={Boolean(errors.horario)}
                aria-describedby={
                  errors.horario
                    ? 'erro-horario'
                    : 'aviso-horarios-demonstrativos'
                }
              >
                <option value="">Selecione um horário</option>
                {HORARIOS.map((opcao) => (
                  <option
                    key={opcao}
                    value={opcao}
                    disabled={horarioJaPassou(data, opcao)}
                  >
                    {opcao}
                  </option>
                ))}
              </select>

              {horario && (
                <span className="agendamento-horario-selecionado">
                  Horário selecionado: {horario}
                </span>
              )}
              {errors.horario && (
                <span
                  id="erro-horario"
                  className="agendamento-erro"
                  role="alert"
                >
                  {errors.horario}
                </span>
              )}
              <p
                id="aviso-horarios-demonstrativos"
                className="agendamento-aviso-horario"
              >
                Os horários apresentados são ilustrativos e não representam
                vagas ou reservas confirmadas.
              </p>
            </div>

            <button
              type="submit"
              className="agendamento-botao"
            >
              Próximo
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
