import { useRef } from "react";
import { useEhDesktop } from "../hooks/useEhDesktop.js";
import { SERVICOS, formatarPreco, formatarDuracao } from "../data/servicos.js";
import { IconeServico, IconeRelogio, FundoCard, TituloSecao } from "./corteArte/ui.jsx";
import "../styles/corte-arte.css";

// Duração estimada (T08)
function Duracao({ servico }) {
  return (
    <span className="ca-duracao" title="Duração estimada">
      <IconeRelogio />
      <span className="ca-sr">Duração estimada: </span>
      {formatarDuracao(servico.duracaoMin, servico.adicional)}
    </span>
  );
}

function CardServicoMobile({ servico }) {
  return (
    <article className="ca-card ca-servico ca-servico-mobile">
      <FundoCard src={servico.imagem.mobile} alt={servico.imagem.alt} veu={false} />
      <div className="ca-card-conteudo">
        <IconeServico tipo={servico.icone} />
        <h3 className="ca-nome ca-sombra ca-servico-nome">{servico.nome}</h3>
        <p className="ca-serif ca-desc">{servico.descricao}</p>
        <span className="ca-titulo ca-sombra ca-preco">{formatarPreco(servico.preco, servico.adicional)}</span>
        <Duracao servico={servico} />
      </div>
    </article>
  );
}

function CardServicoDesktop({ servico }) {
  return (
    <article className="ca-servico-coluna">
      <div className="ca-card ca-servico ca-servico-desktop">
        <FundoCard src={servico.imagem.desktop} alt={servico.imagem.alt} veu={false} />
        <div className="ca-card-conteudo">
          <h3 className="ca-nome ca-sombra ca-servico-nome">{servico.nome}</h3>
          <p className="ca-serif ca-desc">{servico.descricao}</p>
        </div>
      </div>
      <span className="ca-titulo ca-sombra ca-preco">{formatarPreco(servico.preco, servico.adicional)}</span>
      <Duracao servico={servico} />
    </article>
  );
}

function SecaoServicos({ desktop }) {
  return (
    <section id="servicos" className="ca-secao" aria-labelledby="ca-titulo-servicos">
      <div className="ca-conteudo">
        <TituloSecao desktop={desktop} id="ca-titulo-servicos">NOSSOS SERVIÇOS</TituloSecao>

        <div className="ca-servicos">
          {SERVICOS.map((servico) =>
            desktop ? <CardServicoDesktop key={servico.id} servico={servico} /> : <CardServicoMobile key={servico.id} servico={servico} />
          )}
        </div>

        <div className="ca-aviso">
          <div className="ca-linha" aria-hidden="true" />
          <p className="ca-titulo ca-aviso-texto">
            EM CASO DE MAIS DE UM SERVIÇO O VALOR SERÁ RESPECTIVO À SOMA DOS VALORES BASE DE CADA SERVIÇO REQUISITADO
          </p>
        </div>
      </div>
    </section>
  );
}

// Componente da seção: mede a largura e decide mobile/desktop.
export default function Servicos() {
  const ref = useRef(null);
  const desktop = useEhDesktop(ref);
  return (
    <div ref={ref} className={"ca-raiz " + (desktop ? "ca-desktop" : "ca-mobile")}>
      <SecaoServicos desktop={desktop} />
    </div>
  );
}
