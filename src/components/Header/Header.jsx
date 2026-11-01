import whatsappIcon from '../../assets/whatsapp.png'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <a className="logo" href="#inicio" aria-label="Corte & Arte - início">
        CORTE & ARTE
      </a>

      <nav className="main-nav desktop-nav" aria-label="Navegação">
        <a href="#servicos">Serviços</a>
        <a href="#sobre">Sobre</a>
        <a href="#avaliacoes">Avaliações</a>
        <a href="#contato">Contato</a>
      </nav>

      <a className="header-cta" href="agendamento">
        Agende já
        <img src={whatsappIcon} alt="" />
      </a>

      <details className="mobile-menu">
        <summary className="menu-toggle" aria-label="Abrir ou fechar o menu">
          <span></span>
          <span></span>
          <span></span>
        </summary>
        <nav className="main-nav" aria-label="Navegação">
          <a href="#servicos">Serviços</a>
          <a href="#sobre">Sobre</a>
          <a href="#avaliacoes">Avaliações</a>
          <a href="#contato">Contato</a>
        </nav>
      </details>
    </header>
  )
}
