import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { useEhDesktop } from "../../hooks/useEhDesktop.js";
import { PORTFOLIO } from "../../data/portfolio.js";
import { Descricao, IconeAmpliar, IconeFechar, IconeSeta, FundoCard, TituloSecao } from "../corteArte/ui.jsx";
import "../../styles/corte-arte.css";

function CarrosselPortfolio({ fotos, index, aoMudarIndex, aoAbrir, refsSlides }) {
  const [arrastando, setArrastando] = useState(false);
  const [arrasto, setArrasto] = useState(0);
  const inicioX = useRef(0);
  const refJanela = useRef(null);
  const total = fotos.length;
  const limitar = (i) => Math.max(0, Math.min(total - 1, i));

  const irPara = (novo, focar) => {
    const i = limitar(novo);
    aoMudarIndex(i);
    if (focar) requestAnimationFrame(() => refsSlides.current[i]?.focus({ preventScroll: true }));
  };

  // Arrastar (toque ou mouse)
  const aoPressionar = (e) => {
    if (e.button !== 0) return; // só botão principal / dedo
    setArrastando(true);
    inicioX.current = e.clientX;
    setArrasto(0);
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };
  const aoMover = (e) => {
    if (!arrastando) return;
    setArrasto(e.clientX - inicioX.current);
  };
  const aoSoltar = (e) => {
    if (!arrastando) return;
    const dx = e.clientX - inicioX.current;
    const largura = refJanela.current?.offsetWidth || 1;
    const limite = largura * 0.18; // arrastar ~18% da largura troca de foto
    if (Math.abs(dx) < 8) aoAbrir(index); // toque simples = ampliar (T12)
    else if (dx <= -limite) irPara(index + 1);
    else if (dx >= limite) irPara(index - 1);
    setArrastando(false);
    setArrasto(0);
  };
  const aoCancelar = () => {
    if (!arrastando) return;
    setArrastando(false);
    setArrasto(0);
  };

  // Teclado: setas trocam de foto, Enter/Espaço ampliam (T14)
  const aoTeclar = (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); irPara(index + 1, true); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); irPara(index - 1, true); }
  };

  const estiloTrilha = {
    display: "flex",
    height: "100%",
    transform: `translateX(calc(${-index * 100}% + ${arrasto}px))`,
    transition: arrastando ? "none" : "transform 320ms ease-out",
  };

  return (
    <div className="ca-carrossel">
      <div
        ref={refJanela}
        role="region"
        aria-roledescription="carrossel"
        aria-label="Fotos do portfólio"
        onPointerDown={aoPressionar}
        onPointerMove={aoMover}
        onPointerUp={aoSoltar}
        onPointerLeave={aoCancelar}
        onPointerCancel={aoCancelar}
        onKeyDown={aoTeclar}
        className={"ca-card ca-carrossel-janela" + (arrastando ? " ca-arrastando" : "")}
      >
        <div style={estiloTrilha}>
          {fotos.map((f, i) => (
            <button
              key={f.id}
              type="button"
              ref={(el) => {
                refsSlides.current[i] = el;
              }}
              className="ca-carrossel-slide"
              tabIndex={i === index ? 0 : -1}
              aria-hidden={i !== index}
              aria-haspopup="dialog"
              aria-label={`Ampliar foto ${i + 1} de ${total}, ${f.titulo}: ${f.imagem.alt}`}
              // Clique pelo teclado (Enter/Espaço) tem detail 0. Toque e mouse
              // são tratados no aoSoltar, para não confundir com arraste.
              onClick={(e) => { if (e.detail === 0) aoAbrir(i); }}
            >
              <img src={f.imagem.src} alt="" draggable={false} />
            </button>
          ))}
        </div>
        <span className="ca-icone-ampliar" aria-hidden="true"><IconeAmpliar /></span>
      </div>

      <div className="ca-bolinhas">
        {fotos.map((f, i) => (
          <button
            key={f.id}
            type="button"
            onClick={() => irPara(i)}
            aria-label={`Mostrar foto ${i + 1}: ${f.titulo}`}
            aria-current={i === index ? "true" : undefined}
            className={"ca-bolinha" + (i === index ? " ca-bolinha-ativa" : "")}
          />
        ))}
      </div>

      <p className="ca-sr" aria-live="polite">
        Foto {index + 1} de {total}: {fotos[index].titulo}
      </p>
    </div>
  );
}

function CardFoto({ item, refBotao, aoAbrir }) {
  return (
    <button
      ref={refBotao}
      type="button"
      className="ca-card ca-card-foto"
      onClick={aoAbrir}
      aria-haspopup="dialog"
      aria-label={`Ampliar foto ${item.titulo}: ${item.imagem.alt}`}
    >
      <FundoCard src={item.imagem.src} alt="" />
      <span className="ca-card-conteudo">
        <span className="ca-serif ca-sombra ca-foto-titulo">{item.titulo}</span>
        <span className="ca-serif ca-foto-desc">
          <Descricao texto={item.descricao} negrito={item.negrito} />
        </span>
      </span>
      <span className="ca-icone-ampliar" aria-hidden="true"><IconeAmpliar /></span>
    </button>
  );
}

// Modal de ampliação (T12, T13, T14). Renderizado no body via createPortal.
function Lightbox({ itens, index, aoMudar, aoFechar }) {
  const total = itens.length;
  const i = Math.max(0, Math.min(total - 1, index)); // nunca sai da coleção
  const item = itens[i];
  const ehPrimeira = i === 0;
  const ehUltima = i === total - 1;

  const refDialogo = useRef(null);
  const refFechar = useRef(null);
  const refAnterior = useRef(null);
  const refProxima = useRef(null);
  const toqueX = useRef(null);
  const pressionouFundo = useRef(false);

  const irAnterior = () => { if (!ehPrimeira) aoMudar(i - 1); };
  const irProxima = () => { if (!ehUltima) aoMudar(i + 1); };

  // Ao abrir: foco no "Fechar" e trava a rolagem da página
  useEffect(() => {
    refFechar.current?.focus();
    const { body, documentElement } = document;
    const salvo = { overflow: body.style.overflow, paddingRight: body.style.paddingRight };
    const larguraBarra = window.innerWidth - documentElement.clientWidth;
    body.style.overflow = "hidden";
    if (larguraBarra > 0) body.style.paddingRight = `${larguraBarra}px`;
    return () => {
      body.style.overflow = salvo.overflow;
      body.style.paddingRight = salvo.paddingRight;
    };
  }, []);

  // Chegou no início/fim com o foco no botão que ficou desativado:
  // passa o foco para o outro botão, para o teclado não se perder
  useEffect(() => {
    const ativo = document.activeElement;
    const perdeuFoco = !refDialogo.current?.contains(ativo) || ativo?.disabled;
    if (!perdeuFoco) return;
    const alvo = ehUltima ? refAnterior.current : refProxima.current;
    (alvo && !alvo.disabled ? alvo : refFechar.current)?.focus();
  }, [i, ehUltima]);

  // Teclado: Escape fecha, setas navegam, Tab circula dentro do modal
  useEffect(() => {
    const aoTeclar = (e) => {
      if (e.key === "Escape") { e.preventDefault(); aoFechar(); }
      else if (e.key === "ArrowRight") { e.preventDefault(); irProxima(); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); irAnterior(); }
      else if (e.key === "Tab") {
        const focaveis = Array.from(refDialogo.current?.querySelectorAll("button:not([disabled])") ?? []);
        if (!focaveis.length) return;
        const primeiro = focaveis[0];
        const ultimo = focaveis[focaveis.length - 1];
        const ativo = document.activeElement;
        if (!refDialogo.current.contains(ativo)) { e.preventDefault(); primeiro.focus(); }
        else if (e.shiftKey && ativo === primeiro) { e.preventDefault(); ultimo.focus(); }
        else if (!e.shiftKey && ativo === ultimo) { e.preventDefault(); primeiro.focus(); }
      }
    };
    document.addEventListener("keydown", aoTeclar);
    return () => document.removeEventListener("keydown", aoTeclar);
  });

  // Arrastar a foto no modal (toque)
  const aoTocar = (e) => { toqueX.current = e.clientX; };
  const aoSoltarToque = (e) => {
    if (toqueX.current === null) return;
    const dx = e.clientX - toqueX.current;
    toqueX.current = null;
    if (dx < -50) irProxima();
    else if (dx > 50) irAnterior();
  };

  return createPortal(
    <div
      className="ca-modal-fundo"
      onPointerDown={(e) => { pressionouFundo.current = e.target === e.currentTarget; }}
      onClick={(e) => { if (pressionouFundo.current && e.target === e.currentTarget) aoFechar(); }}
    >
      <div
        ref={refDialogo}
        className="ca-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ca-modal-titulo"
        aria-describedby="ca-modal-descricao"
      >
        <div className="ca-modal-topo">
          <button ref={refFechar} type="button" className="ca-modal-botao" onClick={aoFechar} aria-label="Fechar foto ampliada">
            <IconeFechar />
          </button>
        </div>

        <div
          className="ca-modal-imagem"
          onPointerDown={aoTocar}
          onPointerUp={aoSoltarToque}
          onPointerCancel={() => { toqueX.current = null; }}
        >
          <img key={item.id} src={item.imagem.src} alt={item.imagem.alt} draggable={false} />
        </div>

        <div className="ca-modal-legenda">
          <h3 id="ca-modal-titulo" className="ca-serif">{item.titulo}</h3>
          <p id="ca-modal-descricao" className="ca-serif">
            <Descricao texto={item.descricao} negrito={item.negrito} />
          </p>
        </div>

        <div className="ca-modal-nav">
          <button ref={refAnterior} type="button" className="ca-modal-botao" onClick={irAnterior} disabled={ehPrimeira} aria-label="Foto anterior">
            <IconeSeta direcao="esquerda" />
          </button>
          <span className="ca-titulo ca-modal-contador" aria-live="polite" aria-atomic="true">
            <span className="ca-sr">Foto </span>{i + 1}
            <span aria-hidden="true"> / </span><span className="ca-sr"> de </span>
            {total}
          </span>
          <button ref={refProxima} type="button" className="ca-modal-botao" onClick={irProxima} disabled={ehUltima} aria-label="Próxima foto">
            <IconeSeta direcao="direita" />
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

function SecaoPortfolio({ desktop }) {
  const total = PORTFOLIO.length;
  const limitar = (i) => Math.max(0, Math.min(total - 1, i));

  const [indexCarrossel, setIndexCarrossel] = useState(0);
  const [indexModal, setIndexModal] = useState(null); // null = modal fechado
  const refsGatilho = useRef([]); // cards/slides que abrem o modal

  const abrirModal = (i) => setIndexModal(limitar(i));
  const fecharModal = () => {
    if (indexModal === null) return;
    const i = indexModal;
    setIndexModal(null);
    setIndexCarrossel(i); // no mobile, o carrossel fica na última foto vista
    // devolve o foco ao card da foto que estava aberta
    requestAnimationFrame(() => refsGatilho.current[i]?.focus({ preventScroll: !desktop }));
  };

  const itemAtual = PORTFOLIO[indexCarrossel];

  return (
    <section className="ca-secao ca-secao-portfolio" aria-labelledby="ca-titulo-portfolio">
      <div className="ca-conteudo">
        <TituloSecao
          desktop={desktop}
          id="ca-titulo-portfolio"
        >
          PORTFÓLIO
        </TituloSecao>

        {desktop ? (
          <ul className="ca-grade-portfolio" role="list">
            {PORTFOLIO.map((item, i) => (
              <li key={item.id} className="ca-grade-item">
                <CardFoto
                  item={item}
                  refBotao={(el) => {
                    refsGatilho.current[i] = el;
                  }}
                  aoAbrir={() => abrirModal(i)}
                />
              </li>
            ))}
          </ul>
        ) : (
          <>
            <CarrosselPortfolio
              fotos={PORTFOLIO}
              index={indexCarrossel}
              aoMudarIndex={setIndexCarrossel}
              aoAbrir={abrirModal}
              refsSlides={refsGatilho}
            />
            <p className="ca-serif ca-legenda">
              <Descricao texto={itemAtual.descricao} negrito={itemAtual.negrito} />
            </p>
          </>
        )}
      </div>

      {indexModal !== null && (
        <Lightbox
          itens={PORTFOLIO}
          index={indexModal}
          aoMudar={(i) => setIndexModal(limitar(i))}
          aoFechar={fecharModal}
        />
      )}
    </section>
  );
}

// Componente da seção: mede a largura e decide mobile/desktop.
export default function Portfolio() {
  const ref = useRef(null);
  const desktop = useEhDesktop(ref);
  return (
    <div ref={ref} className={"ca-raiz " + (desktop ? "ca-desktop" : "ca-mobile")}>
      <SecaoPortfolio desktop={desktop} />
    </div>
  );
}
