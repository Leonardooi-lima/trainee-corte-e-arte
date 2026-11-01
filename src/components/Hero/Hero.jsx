import logo from "../../assets/logos/logo-corte-arte.webp";
import "./Hero.css";

export default function Hero() {
  const reduzirMovimento =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <section className="hero" id="inicio">
      {reduzirMovimento ? (
        <img
          className="hero-video"
          src="/images/hero-poster.webp"
          alt=""
          aria-hidden="true"
        />
      ) : (
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/hero-poster.webp"
          aria-hidden="true"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      )}

      <div className="conteudo-hero">
        <img
          className="logo-hero"
          src={logo}
          alt="Corte & Arte"
          width="348"
          height="336"
        />

        <h1 className="titulo-hero">
          BARBEARIA
          <br className="quebra-mobile" /> PREMIUM
          <span>EM BAURU</span>
        </h1>

        <div className="texto-hero">
          <p>
            Na barbearia Corte &amp; Arte você encontra um atendimento especializado,
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
