import logo from "../../assets/logos/logo-corte-arte.svg";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <video
        className="hero__background"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="hero__content">
        <img
          className="hero__logo"
          src={logo}
          alt="Corte & Arte"
        />

        <h1 className="hero__title">
          BARBEARIA PREMIUM
          <span>EM BAURU</span>
        </h1>

        <div className="hero__presentation">
          <p>
            Na barbearia Corte &amp; Arte você encontra atendimento especializado,
            <br />
            ambiente moderno e profissionais que transformam
            <br />
            <strong>o seu corte em arte.</strong>
          </p>
        </div>
      </div>

      <a className="hero__more" href="#servicos">
        SAIBA MAIS
        <span aria-hidden="true" />
      </a>
    </section>
  );
}
