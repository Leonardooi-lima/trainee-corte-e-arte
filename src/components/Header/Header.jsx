import whatsappIcon from '../../assets/whatsapp.png'
import logo from '../../assets/logos/logo-header.png'
import { linkWhatsApp } from '../../lib/whatsapp.js'
import './Header.css'

export default function Header() {
  const whatsapp = linkWhatsApp()

  return (
    <header className="header">
      <a className="logo" href="#inicio" aria-label="Corte & Arte - início">
        <img className="logo-image" src={logo} alt="Corte & Arte" />
      </a>

      <nav className="main-nav desktop-nav" aria-label="Navegação">
        <a href="#servicos">Serviços</a>
        <a href="#sobre-nos">Sobre</a>
        <a href="#avaliacoes">Avaliações</a>
        <a href={whatsapp} target="_blank" rel="noopener noreferrer">
          Contato
        </a>
      </nav>

      <a
        className="header-cta"
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
      >
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
          <a href="#sobre-nos">Sobre</a>
          <a href="#avaliacoes">Avaliações</a>
          <a href={whatsapp} target="_blank" rel="noopener noreferrer">
            Contato
          </a>
        </nav>
      </details>
    </header>
  )
}
