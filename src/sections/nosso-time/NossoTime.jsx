import './nosso-time.css';
import barber1 from './assets/barber-1.jpg';
import barber2 from './assets/barber-2.jpg';
import barber3 from './assets/barber-3.jpg';

const PROFISSIONAIS = [
  {
    foto: barber1,
    nome: 'Alexandre Saraiva Carniato',
    especialidade: 'Cortes clássicos e tesoura.',
  },
  {
    foto: barber2,
    nome: 'Luan Pereira',
    especialidade: 'Degradês e cortes modernos.',
  },
  {
    foto: barber3,
    nome: 'Cauã de Oliveira',
    especialidade: 'Barba, acabamento e visagismo.',
  },
];

export default function NossoTime() {
  return (
    <section id="nosso-time" className="nosso-time">
      <div className="nosso-time__container">
        <span className="nosso-time__label">— NOSSO TIME</span>
        <h2 className="nosso-time__title">
          Quem transforma<br />corte em arte
        </h2>
        <ul className="nosso-time__profissionais">
          {PROFISSIONAIS.map((prof, i) => (
            <li key={i} className="nosso-time__profissional">
              <img
                src={prof.foto}
                alt={prof.nome}
                className={`nosso-time__foto ${i === 0 ? 'nosso-time__foto--barber1' : ''}`}
              />
              <h3 className="nosso-time__nome">{prof.nome}</h3>
              <p className="nosso-time__especialidade">{prof.especialidade}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}