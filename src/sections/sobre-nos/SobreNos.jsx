import './sobre-nos.css';
import ambienteImg from './assets/ambiente.png';
import iconRazor from './assets/icon-razor.svg';
import iconBarberChair from './assets/icon-barber-chair.svg';
import iconStylist from './assets/icon-stylist.svg';

// Créditos dos ícones:
// icon-razor.svg: <a href="https://www.flaticon.com/free-icons/barber" title="barber icons">Barber icons created by surang - Flaticon</a>
// icon-barber-chair.svg: <a href="https://www.flaticon.com/free-icons/barber-chair" title="barber-chair icons">Barber-chair icons created by surang - Flaticon</a>
// icon-stylist.svg: <a href="https://www.flaticon.com/free-icons/barber-shop" title="barber shop icons">Barber shop icons created by Magnific - Flaticon</a>

const DIFERENCIAIS = [
  {
    icone: iconRazor,
    titulo: 'Precisão em cada detalhe',
    descricao: 'Técnicas profissionais e atenção ao acabamento de cada corte.',
  },
  {
    icone: iconBarberChair,
    titulo: 'Conforto e ambiente',
    descricao: 'Um espaço preparado para proporcionar uma experiência agradável.',
  },
  {
    icone: iconStylist,
    titulo: 'Estilo e personalidade',
    descricao: 'Serviços que valorizam o estilo e a individualidade de cada cliente.',
  },
];

export default function SobreNos() {
  return (
    <section id="sobre-nos" className="sobre-nos">
      <div className="sobre-nos__container">
        <div className="sobre-nos__content">
          <span className="sobre-nos__label">— SOBRE NÓS</span>
          <h1 className="sobre-nos__title">
            Mais que um corte.<br />
            Uma experiência.
          </h1>
          <p className="sobre-nos__text">
            Acreditamos que cuidar da aparência vai além do espelho. Unimos
            técnica, atenção aos detalhes e um ambiente acolhedor para
            transformar cada visita em uma experiência única.
          </p>
        </div>
        <ul className="sobre-nos__diferenciais">
          {DIFERENCIAIS.map((dif, i) => (
            <li key={i} className="sobre-nos__diferencial">
              <div className="sobre-nos__icon-box">
                <img
                  src={dif.icone}
                  alt={`Ícone: ${dif.titulo}`}
                  className="sobre-nos__icon"
                />
              </div>
              <div className="sobre-nos__dif-text">
                <h3 className="sobre-nos__dif-title">{dif.titulo}</h3>
                <p className="sobre-nos__dif-desc">{dif.descricao}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="sobre-nos__image">
          <img
            src={ambienteImg}
            alt="Ambiente da barbearia Corte & Arte"
            className="sobre-nos__photo"
          />
        </div>
      </div>
    </section>
  );
}