import { useState, useEffect } from "react";

export const PONTO_DESKTOP = 1024; // largura (px) a partir da qual vira desktop

// Mede a largura do componente (ResizeObserver) e diz se é desktop.
export function useEhDesktop(ref) {
  const [ehDesktop, setEhDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= PONTO_DESKTOP : false
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const medir = () => setEhDesktop(el.getBoundingClientRect().width >= PONTO_DESKTOP);
    medir();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", medir);
      return () => window.removeEventListener("resize", medir);
    }
    const observador = new ResizeObserver(medir);
    observador.observe(el);
    return () => observador.disconnect();
  }, [ref]);

  return ehDesktop;
}
