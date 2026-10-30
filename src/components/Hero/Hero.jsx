import logo from "../../assets/logos/logo-corte-arte.svg";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="conteudo-hero">
        <img
          className="logo-hero"
          src={logo}
          alt="Corte & Arte"
        />

        <h1 className="titulo-hero">
          BARBEARIA PREMIUM
          <span>EM BAURU</span>
        </h1>

        <div className="texto-hero">
          <p>
            Na barbearia Corte &amp; Arte você encontra atendimento especializado,
            <br />
            ambiente moderno e profissionais que transformam
            <br />
            <strong>o seu corte em arte.</strong>
          </p>
        </div>
      </div>

      <a className="saiba-mais" href="#servicos">
        SAIBA MAIS
        <span aria-hidden="true" />
      </a>
    </section>
  );
}
