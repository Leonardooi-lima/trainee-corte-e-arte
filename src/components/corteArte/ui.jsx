// Primitivos de UI e ícones da seção Serviços.

const propsIcone = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

// ===== Ícones =====
export function IconeServico({ tipo }) {
  const estilo = { width: 36, height: 36, color: "#fff", marginBottom: 4 };
  if (tipo === "tesoura")
    return (
      <svg {...propsIcone} style={estilo}>
        <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" /><line x1="14.47" y1="14.48" x2="20" y2="20" /><line x1="8.12" y1="8.12" x2="12" y2="12" />
      </svg>
    );
  if (tipo === "pincel")
    return (
      <svg {...propsIcone} style={estilo}>
        <path d="M7.5 9.5a4.5 4.5 0 0 1 9 0c0 1-.5 1.5-1 1.5h-7c-.5 0-1-.5-1-1.5Z" />
        <rect x="9" y="11" width="6" height="2.2" rx="1" />
        <path d="M9.4 13.2 10 20a2 2 0 0 0 4 0l.6-6.8" />
      </svg>
    );
  return (
    <svg {...propsIcone} style={estilo}>
      <rect x="9.5" y="3" width="5" height="9" rx="1.2" /><line x1="12" y1="12" x2="12" y2="15" /><circle cx="12" cy="18" r="2.4" />
    </svg>
  );
}

export const IconeRelogio = () => (
  <svg {...propsIcone}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);

// ===== Ornamento do título (desktop) =====
export function Flourish({ espelhado }) {
  return (
    <svg viewBox="0 0 240 40" className="ca-flourish" style={espelhado ? { transform: "scaleX(-1)" } : undefined} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M6 26 C 80 22 150 19 198 16" />
        <path d="M6 26 C 55 15 120 14 160 21" />
        <path d="M198 16 c 18 -1 29 10 23 22 c -4 9 -19 8 -21 -2 c -1 -6 6 -10 11 -5" />
      </g>
    </svg>
  );
}

// ===== Título de seção =====
export function TituloSecao({ children, desktop, id }) {
  if (!desktop) {
    return (
      <h2 id={id} className="ca-titulo ca-h2">
        <span aria-hidden="true">— </span>{children}<span aria-hidden="true"> —</span>
      </h2>
    );
  }
  return (
    <div className="ca-titulo-desktop">
      <Flourish />
      <h2 id={id} className="ca-titulo ca-h2">{children}</h2>
      <Flourish espelhado />
    </div>
  );
}

// ===== Fundo de card (foto + véu opcional) =====
export function FundoCard({ src, alt, veu = true }) {
  return (
    <>
      <img src={src} alt={alt} className="ca-card-img" draggable={false} />
      {veu && <span className="ca-card-veu" aria-hidden="true" />}
    </>
  );
}
