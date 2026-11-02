import alexandre from '../../assets/equipe/alexandre.png'
import luan from '../../assets/equipe/luan.png'
import caua from '../../assets/equipe/caua.png'
import './Equipe.css'

const profissionais = [
  {
    src: alexandre,
    nome: 'Alexandre Saraiva Carniato',
    especialidade: 'Cortes clássicos e tesoura.',
  },
  {
    src: luan,
    nome: 'Luan Pereira',
    especialidade: 'Degradês e cortes modernos.',
  },
  {
    src: caua,
    nome: 'Cauã de Oliveira',
    especialidade: 'Barba, acabamento e visagismo.',
  },
]

export default function Equipe() {
  return (
    <section className="equipe" aria-label="Nossa equipe">
      <header className="equipe-cabecalho">
        <p className="equipe-sobretitulo">NOSSO TIME</p>
        <h2 className="equipe-titulo">
          Quem transforma
          <br />
          corte em arte
        </h2>
      </header>

      <div className="equipe-fotos">
        {profissionais.map((profissional) => (
          <figure className="equipe-foto" key={profissional.nome}>
            <img
              src={profissional.src}
              alt={`Retrato de ${profissional.nome}`}
            />
            <figcaption className="equipe-legenda">
              <h3>{profissional.nome}</h3>
              <p>{profissional.especialidade}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
