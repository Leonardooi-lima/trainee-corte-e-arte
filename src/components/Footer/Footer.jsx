import whatsappIcon from '../../assets/whatsapp.png'
import localizacaoIcon from '../../assets/icones/localizacao.svg'
import './Footer.css'

const colunas = [
  {
    titulo: 'Explore',
    links: [
      { texto: 'Serviços', destino: '#servicos' },
      { texto: 'Portfólio', destino: '#ca-titulo-portfolio' },
      { texto: 'Avaliações', destino: '#avaliacoes' },
    ],
  },
  {
    titulo: 'Conheça',
    links: [
      { texto: 'Sobre nós', destino: '#sobre-nos' },
      { texto: 'Nossa equipe', destino: '#equipe' },
    ],
  },
  {
    titulo: 'Contato',
    links: [
      { texto: 'Fale conosco', destino: '#contato' },
      { texto: 'Como chegar', destino: '#localizacao' },
      { texto: 'Horários', destino: '#contato' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-conteudo">
        <div className="footer-marca">
          <a className="footer-nome" href="#inicio">
            Corte &amp; Arte
          </a>
          <p>Seu estilo, nossa arte. Cuidado em cada detalhe.</p>

          <nav className="footer-atalhos" aria-label="Atalhos do rodapé">
            <a href="#contato" aria-label="Contato e WhatsApp">
              <img src={whatsappIcon} alt="" width="20" height="20" />
            </a>
            <a href="#localizacao" aria-label="Nossa localização">
              <img src={localizacaoIcon} alt="" width="20" height="20" />
            </a>
            <a href="#inicio" aria-label="Voltar ao início">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M12 20V4m-7 7 7-7 7 7" />
              </svg>
            </a>
          </nav>
        </div>

        {colunas.map(({ titulo, links }) => (
          <nav className="footer-coluna" aria-label={titulo} key={titulo}>
            <h2>{titulo}</h2>
            <ul>
              {links.map(({ texto, destino }) => (
                <li key={texto}>
                  <a href={destino}>{texto}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
    </footer>
  )
}
