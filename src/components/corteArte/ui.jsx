import tesouraIcon from '../../assets/icones/tesoura.svg'
import pincelIcon from '../../assets/icones/pincel.svg'
import navalhaIcon from '../../assets/icones/navalha.svg'
import relogioIcon from '../../assets/icones/relogio.svg'
import ampliarIcon from '../../assets/icones/ampliar.svg'
import fecharIcon from '../../assets/icones/fechar.svg'
import setaEsquerdaIcon from '../../assets/icones/seta-esquerda.svg'
import setaDireitaIcon from '../../assets/icones/seta-direita.svg'
import ornamento from '../../assets/icones/ornamento-portfolio.svg'

export function Descricao({ texto, negrito }) {
  if (!negrito || !texto.includes(negrito)) return <>{texto}</>
  const [antes, depois] = texto.split(negrito)
  return (
    <>
      {antes}
      <strong style={{ fontWeight: 600 }}>{negrito}</strong>
      {depois}
    </>
  )
}

export function IconeServico({ tipo }) {
  let icone = navalhaIcon
  if (tipo === 'tesoura') icone = tesouraIcon
  if (tipo === 'pincel') icone = pincelIcon

  return (
    <img className="ca-icone-servico" src={icone} alt="" draggable={false} />
  )
}

export function IconeRelogio() {
  return <img src={relogioIcon} alt="" draggable={false} />
}

export function IconeAmpliar() {
  return <img src={ampliarIcon} alt="" draggable={false} />
}

export function IconeFechar() {
  return <img src={fecharIcon} alt="" draggable={false} />
}

export function IconeSeta({ direcao }) {
  const icone = direcao === 'esquerda' ? setaEsquerdaIcon : setaDireitaIcon
  return <img src={icone} alt="" draggable={false} />
}

export function Flourish({ espelhado, src = ornamento }) {
  return (
    <img
      src={src}
      className={
        espelhado ? 'ca-flourish ca-flourish-espelhado' : 'ca-flourish'
      }
      alt=""
      draggable={false}
    />
  )
}

export function TituloSecao({ children, desktop, id, ornamentoSrc }) {
  return (
    <div className={desktop ? 'ca-titulo-desktop' : 'ca-titulo-mobile'}>
      <Flourish src={ornamentoSrc} />
      <h2 id={id} className="ca-titulo ca-h2">
        {children}
      </h2>
      <Flourish espelhado src={ornamentoSrc} />
    </div>
  )
}

// Fundo de card com foto e camada escura opcional.
export function FundoCard({ src, alt, veu = true }) {
  return (
    <>
      <img src={src} alt={alt} className="ca-card-img" draggable={false} />
      {veu && <span className="ca-card-veu" aria-hidden="true" />}
    </>
  )
}
