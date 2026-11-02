import './Avaliacoes.css'

export default function Avaliacoes() {
  return (
    <section className="avaliacoes" aria-label="Avaliações de clientes">
      <div className="avaliacoes-desktop" aria-hidden="true">
        <div className="avaliacoes-fileira avaliacoes-fileira-esquerda">
          <div className="avaliacoes-card" />
          <div className="avaliacoes-card" />
          <div className="avaliacoes-card" />
          <div className="avaliacoes-card" />
        </div>

        <div className="avaliacoes-fileira avaliacoes-fileira-direita">
          <div className="avaliacoes-card" />
          <div className="avaliacoes-card" />
          <div className="avaliacoes-card" />
        </div>

        <div className="avaliacoes-fileira avaliacoes-fileira-esquerda">
          <div className="avaliacoes-card" />
          <div className="avaliacoes-card" />
          <div className="avaliacoes-card" />
          <div className="avaliacoes-card" />
        </div>
      </div>

      <div className="avaliacoes-mobile" aria-hidden="true">
        <div className="avaliacoes-card-mobile" />
        <div className="avaliacoes-card-mobile" />
        <div className="avaliacoes-card-mobile" />
      </div>
    </section>
  )
}
