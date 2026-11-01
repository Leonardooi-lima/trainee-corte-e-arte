import alexandre from '../../assets/equipe/alexandre.png'
import luan from '../../assets/equipe/luan.png'
import caua from '../../assets/equipe/caua.png'
import './Equipe.css'

const profissionais = [
  { src: alexandre, alt: 'Profissional da Corte & Arte' },
  { src: luan, alt: 'Profissional da Corte & Arte' },
  { src: caua, alt: 'Profissional da Corte & Arte' },
]

export default function Equipe() {
  return (
    <section className="equipe" aria-label="Nossa equipe">
      <div className="equipe-fotos">
        {profissionais.map((profissional) => (
          <div className="equipe-foto" key={profissional.src}>
            <img src={profissional.src} alt={profissional.alt} />
          </div>
        ))}
      </div>
    </section>
  )
}
